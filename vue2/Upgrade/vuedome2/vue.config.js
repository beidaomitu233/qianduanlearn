const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     //想走代理时就配置'/api'即可。
  //     "/api": {
  //       //请求的后端地址，只写到端口
  //       target: "http://localhost:7001",
  //       pathrewrite: {
  //         "^/api": "",
  //       },
  //       ws: true,
  //       changeOrigin: true,
  //     },
  //     "/foo": {
  //       target: "<other_url>",
  //     },
  //   },
  // },
});
