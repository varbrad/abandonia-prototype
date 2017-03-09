const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const output = path.join(__dirname, 'www')

module.exports = {
  entry: './src/index.js',
  output: {
    path: output,
    filename: 'bundle.js',
    publicPath: ''
  },
  devtool: 'cheap-source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Abandonia',
      template: './src/index.pug'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    inline: true,
    contentBase: output
  }
}
