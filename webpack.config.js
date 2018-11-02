const path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: ["whatwg-fetch", "babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  watch: true

}
