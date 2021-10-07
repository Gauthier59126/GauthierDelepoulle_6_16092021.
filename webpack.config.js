const webpack = require("webpack");
const path = require("path");

let config = {
    entry:{
        "index" : "./js/index.js",
    } ,
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./[name].bundle.js"
    }
  }
  
  module.exports = config;