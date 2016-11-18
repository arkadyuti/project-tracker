const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
  
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
  module: {
    loaders: [
    {
          test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
        
            query: {
               presets: ['es2015', "stage-0", 'react'],
                plugins: ["transform-decorators-legacy"]
            }
        },
      {
      test:/\.js$/,
      exclude:/node_modules/,
      loader:'babel-loader',
      query:{
          presets: ["es2015", "stage-0", "react"],
                plugins: ["transform-decorators-legacy"]
      }
        },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=200000' 
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=src/fonts/Darkenstone.ttf'
      }
    ]
  }
};
