const folder = './src/images/'
const fs = require('fs')
const Jimp = require('jimp')
const files = fs.readdirSync(folder)

const process = async function(i) {
	if(i < files.length ) {
		const file = files[i]
		const regex = /\.(jpe?g||png)$/
		
		if (
			regex.test(file) == false ||
			file.includes('.lazy') || 
			file.includes('.blur')
		) return process(i + 1)
		
		console.log('Lazying:', folder + file)
		const image = await Jimp.read(folder + file).catch((err) => { return console.log(err) })
		image.resize(1280, Jimp.AUTO)
		image.quality(90)
		
		const prefix = file.split(regex)[0]
		const suffix = file.split(regex)[1]
		const saveName = prefix + '.lazy.' + suffix
		const save = await image.write(folder + saveName)
		
		process(i + 1)
	}
}
process(0)