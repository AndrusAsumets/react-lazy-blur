const folder = './src/images/'
const fs = require('fs')
const Jimp = require('jimp')
const files = fs.readdirSync(folder)

const process = async function(i) {
	if(i < files.length ) {
		const file = files[i]
		
		if (
			file.indexOf('.lazy.') === -1 ||
			file.includes('.blur')
			) return process(i + 1)
		
		console.log('Blurring:', folder + file)
		const image = await Jimp.read(folder + file).catch((err) => { return console.log(err) })
		image.resize(32, Jimp.AUTO)
		image.blur(10)
		
		const prefix = file.split('.lazy.')[0]
		const suffix = file.split('.lazy.')[1]
		const saveName = prefix + '.blur.' + suffix
		const save = await image.write(folder + saveName)
		
		process(i + 1)
	}
}
process(0)