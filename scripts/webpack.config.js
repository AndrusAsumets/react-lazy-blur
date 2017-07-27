var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var config = {
    entry: [
        'babel-polyfill',
        './src/js/index.js'
    ],
    output: {
        path: path.join(__dirname, '../', 'build'),
        filename: 'bundle.min.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module : {
        loaders : [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\B.lazy\B/,
			    loader: 'file-loader'
            },
            {
                test: /\.(jpe?g|png)(\?.*)?$/,
                exclude: /\B.lazy\B/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.min.css'),
        new CopyWebpackPlugin([
            { from: 'src/html/index.production.html', to: 'index.html' },
            { from: 'src/images/share.blur.png', to: 'share.blur.png' }
        ])
    ]
}

module.exports = config
