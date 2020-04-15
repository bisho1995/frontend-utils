const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

const dev = process.env.NODE_ENV === 'development'
const babelOptions = {
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-arrow-functions'],
}

const config = {
  mode: dev ? 'development' : 'production',
  context: path.join(__dirname, 'src'),
  entry: {
    browser: './browser',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: dev ? '[name].bundle.js' : '[name].[chunkhash].js',
    publicPath: '/public/',
    chunkFilename: dev ? '[name].bundle.js' : '[name].[chunkhash].js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
        ],
      },
    ],
  },
  plugins: [
    /**
      Removes all files from webpack's output directory
     */
    new CleanWebpackPlugin()],
}

module.exports = config
