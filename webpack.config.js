const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist/assets'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", 'sass-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css'
    })]
}