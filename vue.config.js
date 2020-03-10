module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://47.93.118.241:8282',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }