const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置webpack
  configureWebpack: {
    // 配置路径别名
    // @是配置好的路径别名 src
    resolve: {
      alias: {
        "assets": "@/assets"
      }
    }
  },
  lintOnSave:false  // 修改成false 就是不检查了
})
