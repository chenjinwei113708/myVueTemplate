const path = require('path');
const Config = require('./conf');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
    // config.resolve.alias.set('img', path.resolve('src/assets/images'))
  },
  css: {
    extract: !isDev,

    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        prependData: `@import "@/assets/scss/mixin.scss";`
      }
    }
  },

  devServer: {
    // 前端开发端口
    port: '8334',
    proxy: {
      '/api': {
        target: `http://localhost:${Config.network.port}`,   //代理接口
        changeOrigin: true,
      }
    }
  }
}