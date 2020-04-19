const path = require("path")
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "hello.js",
        path: path.resolve(__dirname, "helloDist")
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
            }
          ]
    }    
}