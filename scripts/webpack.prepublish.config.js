var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/js/components/react-lazy-blur.js',
    output: {
    	path: path.join(__dirname, '../', 'bin'),
    	filename: 'index.js',
    	libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            },
        ]
    },
	externals: {
		'react': 'commonjs react'
	}
}