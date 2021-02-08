const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '..', 'src/index.js'),
    resolve:{
        extensions: ['.js','.jsx']
    },
    module:{
        rules : [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            }
        ]
    }
}