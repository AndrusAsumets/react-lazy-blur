#!/usr/bin/env python
"""
Checks out the gh-pages branch to _site/ dir
as a separate repo.
Allows for fancy-pants deploys, a   la
https://gist.github.com/chrisjacob/825950

To be used with the sibling deploy script

Author: Alex Rattray <rattray.alex@gmail.com>
"""

import os
import sys
import subprocess
from clint.textui import puts, indent
from clint.textui.colored import cyan, red, blue, yellow


def shell(cmd, silent_err=False, *args, **kwargs):
  # tell the user what's about to go out
  puts(blue("-> {}".format(cmd)))

  try:
    out = subprocess.check_output(cmd, shell=True, *args, **kwargs)
  except subprocess.CalledProcessError as e:

    errcolor = red
    if silent_err:
      errcolor = yellow

    puts(errcolor("Command failed! (exit code {})".format(e.returncode)))
    with indent(4):
      puts(errcolor("Failed cmd: {}".format(e.cmd)))
      puts(errcolor("Exit code: {}".format(e.returncode)))
      puts(errcolor("Output:"))

    out = e.output
    if not silent_err:
      raise e

  finally:
    with indent(4):
      puts(out)

  return out


def add_to_gitignore(string):
  puts(cyan('going to ensure that {} is in .gitignore...'.format(string)))
  with open('.gitignore', 'r') as gitignore_f:
    for line in gitignore_f.readlines():
      if line == string + '\n':
        puts(cyan('_site is already in .gitignore!'))
        return

  with open('.gitignore', 'a') as gitignore_f:
    gitignore_f.write(string + '\n')
  puts(cyan('wrote _site to .gitignore'))


def main():

  add_to_gitignore('_site')
  shell('rm -rf _site/')

  try:
    shell('git branch gh-pages')  # throws an error if branch existed
    # since it wasn't there already, push gh-pages
    shell('git push -U origin gh-pages')
  except:
    puts('not a problem, just checkin')

  remote = shell('git remote -v').split()[1]
  shell('git clone -b gh-pages --single-branch --depth 1 {remote} _site'
    .format(remote=remote))

  # go to _site, which is an entirely different git checkout
  os.chdir('_site')
  puts('now in folder {}'.format(os.getcwd()))

  # turn these back on if you remove `-b gh-pages` from the `clone` command.
  # shell('git checkout gh-pages')
  # time.sleep(1)
  # shell('git branch -D master')

  # run jekyll build for initial content
  os.chdir('..')
  puts('now in folder {}'.format(os.getcwd()))
  shell('jekyll build')

if __name__ == '__main__':
  puts(os.getcwd())
  if 'bin/' not in sys.argv[0]:
    puts(red('must be run as bin/setup.py! from projectroot!'))
    sys.exit()

  main()
