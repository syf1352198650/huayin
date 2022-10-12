// router/index.js
import path from 'path'

const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`)

 const $routes = [
    {
        path: '/',
        name: 'Home',
        component:resolve('layouts/index.vue'),
        redirect:'/main',
        children:[
            {
                path: '/main',
                name: 'main',
                component:resolve('pages/index.vue'),
                meta:{
                    title:'首页'
                },
                
                
            },
            {
                path: '/introduction',
                name: 'introduction',
                component:resolve('pages/introduction/index.vue'),
                meta:{
                    title:'公司介绍'
                },
                
                
            },
            {
                path: '/fund/:id',
                name: 'fund',
                component:resolve('pages/fund/_id.vue'),
                meta:{
                    title:'基金资讯'
                }
            
                
                
            },
            { path: '/fund/fundlist/:id',
            name: 'fundlist',
            component:resolve('pages/fund/fundlist/_id.vue'),
            meta:{
                title:'基金详情'
            }},
            {
                path: '/active/:id',
                name: 'active',
                component:resolve('pages/active/_id.vue'),
                meta:{
                    title:'公司动态'
                },
                children:[
                   
                ]
                
            },
            { path: '/active/activelist/:id',
            name: 'activelist',
            component:resolve('pages/active/activelist/_id.vue'),
            meta:{
                title:'动态详情'
            }},
            {
                path: '/team',
                name: 'team',
                component:resolve('pages/team/index.vue'),
                meta:{
                    title:'公司团队'
                },
                
                
            },
        ],
        
    },
    
   
]

const extendRoutes = (routes) => {
    routes.length = 0 // 清除 nuxt 自己生成的路由，这里不要用 空数组 赋值
    routes.push(...$routes)
}

export default { base: '/', extendRoutes }