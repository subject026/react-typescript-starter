const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    // what extensions to look at when resolving module names
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        use: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
