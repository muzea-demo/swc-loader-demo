const path = require('path')

module.exports = {
  context: __dirname,
  mode: 'production',
  entry: ['./src/test.js'],
  output: {
    filename: 'js/[name]_[chunkhash].js',
    chunkFilename: 'js/[name]_[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'swc-loader',
          }
        ],
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  optimization: {
    minimize: false
  },
}
