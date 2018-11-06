const path = require("path");
var webpack = require("webpack");

module.exports = env => ({
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
  plugins: [
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV) })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
})
