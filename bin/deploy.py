#!/usr/bin/env python
"""
Deploys dist/ to gh-pages

Author: Alex Rattray <rattray.alex@gmail.com>
"""

import os
import sys
import subprocess
import traceback
from clint.textui import puts, colored, indent


def cyan(msg):
  return puts(colored.cyan(msg))


def red(msg):
  return puts(colored.red(msg))


def shell(cmd, *args, **kwargs):
  # tell the user what's about to go out
  puts(colored.blue("-> {}".format(cmd)))

  try:
    out = subprocess.check_output(cmd, shell=True, *args, **kwargs)
  except subprocess.CalledProcessError as e:
    # puts(colored.red(traceback.format_exc()))
    red("Command failed! (exit code {})".format(e.returncode))
    with indent(4):
      red("Failed cmd: {}".format(e.cmd))
      red("Exit code: {}".format(e.returncode))
      red("Output:")

    out = e.output
    raise e

  finally:
    with indent(4):
      puts(out)

  return out


def main():

  # go to dist, which is an entirely different git checkout
  os.chdir('dist')
  puts(os.getcwd())

  # should be on the gh-pages branch
  current_branch = shell("git branch | grep '*'")
  current_branch = current_branch.replace('* ', '').strip()
  if current_branch != 'gh-pages':
    red('! Why are you not on gh-pages! '
      'This is weird, so Im not even going to fix it for you. '
      'Get your act together.')
    exit()

  # add, commit, push
  shell('git add -A .')
  try:
    shell('git commit -m "Automatic Commit; deploying at `date`"')
    shell('git push')
  except:
    cyan('! Nothing sames to have changed; declining to deploy.')
    puts('If you\'d like to force a push anyway, '
      'just cd to dist/ and `git push`')


if __name__ == '__main__':
  puts(os.getcwd())
  if 'bin/' not in sys.argv[0]:
    red('must be run as bin/deploy.py! from root!')
    sys.exit()

  main()
