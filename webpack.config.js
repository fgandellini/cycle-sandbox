module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'app.js',
  },
  module: {
    loaders: [
      { test: /\.js/, exclude: [/node_modules/], loader: 'babel' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url' },
    ]
  },
  devtool: 'sourcemap',
}