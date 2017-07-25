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
        path: __dirname,
        filename: path.join('build', 'bundle.min.js')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module : {
        loaders : [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g)(\?.*)?$/,
                exclude: /(.lazy|.blur)/,
                loader: 'url-loader?limit=10000',
                query: {
                    name: '/build/static/media/[name].[ext]'
                }
            },
            
            {
                test: /(.lazy|.blur)/,
                loader: 'url-loader?limit=1000000',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('build/bundle.min.css'),
        new CopyWebpackPlugin([
            { from: 'src/html/index.production.html', to: 'build/index.html' }
        ])
    ]
}

module.exports = config
