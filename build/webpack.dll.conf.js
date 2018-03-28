const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['vue', 'vue-router', 'vuex']//'vue-lazyload', 'ydui-district', 'vue-ydui', 'axios', 'babel-runtime', 'fastclick'

  },
  output: {
    path: path.join(__dirname, '../src/dll/'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../src/dll/', "manifest-[name].json"),
      name: "[name]"
    })
  ]
}
