const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Html = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'public'),
        filename: '[contenthash].bundle.js'
    },
    plugins: [    
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new Html({
            template: './src/template/index.html',
            filename: 'index.php'
        })
    ]
});