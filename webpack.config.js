const webpack = require("webpack");
const path = require("path");

let config = {
    entry:{
        "index" : "./js/index.js",
        "page" : "./js/page.js",
        "nom" : "./js/nom.js",
    } ,
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./[name].bundle.js"
    }
  }
  
  module.exports = config;