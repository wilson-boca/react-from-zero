const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // it's because of OS, chooses the correct slash bar /\
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // re for file extension for the babel
        use: {
          loader: 'babel-loader',
        }
      },{
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },{
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};
