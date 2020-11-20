const path = require('path')
const abs = (...args) => path.resolve(__dirname, ...args)

module.exports = () => ({

  mode: 'development',
  // devtool: 'source-map',

  watchOptions: {
    ignored: /\.#|node_modules|~$/,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [],
        include: [
          abs('node_modules/stateful-router'),
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?{"modules": {"localIdentName": "[path][name]__[local]"}}',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

})
