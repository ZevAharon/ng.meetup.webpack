var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var packageJson = require('./package.json');
var path = require('path');

var glob = require('glob');

module.exports = {
    entry: {
        app: './app/index.js',
        legacy: glob.sync('./app/legacy/**/*.js'),  
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: 'dist',
        overlay: true,
        port:9000
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@services': path.resolve(__dirname, './app/services/'),
            '@shared': path.resolve(__dirname, './app/shared/'),
            '@routes': path.resolve(__dirname, './app/routes/'),
		}
    },
    module: {
        rules: 
        [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
            { test:/\.css$/, use:['style-loader','css-loader'] },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: 'html-loader' }
              },
        ]
    },
    mode: 'development',
    plugins: [
        new CopyWebpackPlugin([
        {
			from: './app/legacy/**/*.html',
			to: './'
		}]),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            chunksSortMode: 'dependency'
        })
    ]
}