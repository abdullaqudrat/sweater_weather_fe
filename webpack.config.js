const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  mode: 'development',
  module: {
   rules: [
     { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
     { test: /\.css$/, loader: "style!css" },
     { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
   ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css']
  }

};
