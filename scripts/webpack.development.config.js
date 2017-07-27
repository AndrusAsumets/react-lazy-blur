var path = require('path')
var webpack = require('webpack')

module.exports = function(ip) {
	return {
	    entry: [
	        'babel-polyfill',
	        'webpack-dev-server/client?http://' + ip + ':3000',
	        'webpack/hot/only-dev-server',
	        './src/js/index'
	    ],
	    output: {
	        path: path.join(__dirname, 'development'),
	        publicPath: '/',
	        filename: 'bundle.js'
	    },
	    resolve: {
	        extensions: ['*', '.js']
	    },
	    module: {
	        loaders: [
	            {
	                test: /\.js?$/,
	                loaders: ['react-hot-loader', 'babel-loader'],
	                exclude: /node_modules/
	            },
	            {
	                test: /\.css$/,
	                use: ['style-loader', 'css-loader'],
	                exclude: /node_modules/
	            },
	            {
	                test: /\.(jpe?g|png)$/,
	                loader: 'url-loader?limit=10000'
	            }
	        ]
	    },
	    plugins: [
	        new webpack.HotModuleReplacementPlugin()
	    ]
	}
}