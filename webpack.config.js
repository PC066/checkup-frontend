const path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: ["whatwg-fetch", "babel-polyfill", "bootstrap", "bootstrap/dist/css/bootstrap.min.css", "./src/index.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /(\.css|\.scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  watch: true

}
