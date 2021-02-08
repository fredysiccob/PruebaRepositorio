const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Html = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase : './dist'
    },
    plugins: [     
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),   
        new Html({
            template: './src/template/index.html',
        })
    ]

});