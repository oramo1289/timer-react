const path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output:{
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.join(__dirname, "app"), "node_modules"],
    alias:{
      Main: './components/Main.jsx',
      applicationStyles: './styles/app.scss',
      Nav: './Nav.jsx',
      Countdown: './components/Countdown.jsx',
      Timer: './components/Timer.jsx',
      Clock: './Clock.jsx',
      CountdownForm: './CountdownForm.jsx'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/ ,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    }
    ]
  },

  devtool: 'cheap-module-eval-source-map'
};
// $env:NODE_ENV="development"
// npm list -g --depth=0 lista las librerias globales
