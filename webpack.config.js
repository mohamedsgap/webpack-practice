const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "hello[contentHash].js",
        path: path.resolve(__dirname, "helloDist")
    },
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: ["style-loader", "css-loader", "sass-loader"]
            }
          ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    
}