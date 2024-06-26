const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { title } = require('process');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'bst',
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body',
        }) 
    ]
}