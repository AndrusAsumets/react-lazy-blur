var externalip = require('externalip')
var webpack = require('webpack')
var webpackDev = require('webpack-dev-server')

externalip(function (err, ip) {
	const PORT = 3000
	const HOST = ip
	var config = require('./webpack.development.config.js')(ip)
	
	new webpackDev(webpack(config), {
	    publicPath: config.output.publicPath,
	    contentBase: './src/html',
	    hot: true,
	    historyApiFallback: true,
	    watchOptions: {
	        aggregateTimeout: 300,
	        poll: 1000
	    },
	    public: HOST + ':' + PORT
	}).listen(PORT, HOST, function(err) {
	    if (err) return console.log(err)
	
	    console.log('Started application at: ' + HOST + ':' + PORT)
	})
})
