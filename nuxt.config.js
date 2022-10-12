import router from "./router/index"
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    mode: "universal",
    title: "华银精治",
    htmlAttrs: {
      lang: "en",
    },
    // target: "staic",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/element-ui", ssr: true }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["element-ui", "axios"],
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false, // 是否删除原文件
      }),
      new UglifyJsPlugin(),
    ],
    // 分析工具
    // analyze: true,
    // 分割文件大小
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
router
  // router: {
  //   extendRoutes(routes, resolve) {
  //     // routes.length = 0 // 清除 nuxt 自己生成的路由，这里不要用 空数组 赋值
      
  //         routes.length = 0
  //         routes.push({
  //           path: '/',
  //           name: 'Home',
  //           component:resolve('layouts/index.vue'),
  //           redirect:'/main',
  //           children:[
  //               {
  //                   path: '/main',
  //                   name: 'main',
  //                   component:resolve('pages/index.vue'),
  //                   meta:{
  //                       title:'首页'
  //                   },
                    
                    
  //               },
  //               {
  //                   path: '/introduction',
  //                   name: 'introduction',
  //                   component:resolve('pages/introduction/index.vue'),
  //                   meta:{
  //                       title:'公司介绍'
  //                   },
                    
                    
  //               },
  //               {
  //                   path: '/fund/:id',
  //                   name: 'fund',
  //                   component:resolve('pages/fund/_id.vue'),
  //                   meta:{
  //                       title:'基金资讯'
  //                   },
  //                   children:[
  //                       { path: '/fund/:id/fundlist/:iid',
  //                       name: 'fundlist',
  //                       component:resolve('pages/fund/fundlist/_id.vue'),
  //                       meta:{
  //                           title:'基金详情'
  //                       }}
  //                   ]
                    
                    
  //               },
  //               {
  //                   path: '/active/:id',
  //                   name: 'active',
  //                   component:resolve('pages/active/_id.vue'),
  //                   meta:{
  //                       title:'公司动态'
  //                   },
  //                   children:[
  //                       { path: '/active/:id/activelist/:iid',
  //                       name: 'activelist',
  //                       component:resolve('pages/active/activelist/_id.vue'),
  //                       meta:{
  //                           title:'动态详情'
  //                       }}
  //                   ]
                    
  //               },
  //               {
  //                   path: '/team',
  //                   name: 'team',
  //                   component:resolve('pages/team/index.vue'),
  //                   meta:{
  //                       title:'公司团队'
  //                   },
                    
                    
  //               },
  //           ],
            
  //       },)
  //       // const arr={
  //       //        path: '/main',
  //       //         name: 'main',
  //       //         component: ()=>import("./pages/index.vue"),
  //       //         meta:{
  //       //             title:'首页'
  //       //         },
  //       //  }
  //       //  routes.push(arr)
  //   },
  // },
};
