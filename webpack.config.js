const path = require('path'); // standart nodejs package

module.exports = {
  mode: 'development', // this for dev, and "production" for prod
  devtool: 'eval-source-map', // for debuging our code, u can use just source-map, but eval is better for dev
  entry: "./src/index.ts", // entry file - file that webpack start to read first
  module: {
    rules: [
      {
        test: /\.ts$/, // regEx
        use: 'ts-loader', // let webpack know how to compile our files
        include: [path.resolve(__dirname, 'src')] // -only use this rule for items in that directory
      }
    ]
  },
  output: {
    publicPath: 'public',
    filename: "bundle.js", // output file name
    path: path.resolve(__dirname, 'public') // absolute path
  },
  resolve: {
    extensions: ['.ts', 'js'] // helps us to use js module system (importing files)
  }
}