var path = require("path");
module.exports = {
  entry: {
    bundle: "./client/main.jsx"
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }      
    ]
  }
};