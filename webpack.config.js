const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

var distPath = path.resolve( __dirname, 'dist');


module.exports = {

  entry: './src/index.js',

  output: {
    path: distPath,
    filename: 'app.js'
  },

  plugins: [
    new CleanWebpackPlugin( distPath )
  ]

};
