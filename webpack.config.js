const path = require('path');
const webpack = require('webpack');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = {
    context: paths.src,
    entry: {
        app: './index.ts'
    },
    output: {
        path: paths.dist,
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
        }]
    },
    target: 'node'
};

