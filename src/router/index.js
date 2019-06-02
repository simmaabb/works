import Vue from 'vue'
import VueRouter from 'vue-router'

// 0.  模块化编程 全面声明
Vue.use(VueRouter)

// 1. 定义路由组件  

import App from "../App.vue"
import Home from '../views/home/index.vue'
import Classify from '../views/classify/index.vue'
import ShoppingCart from '../views/shoppingcart/index.vue'
import Personal from '../views/personal/index.vue'
import Login from '../views/login/index.vue'
import Search from "../views/search/index.vue";


// 2. 配置 routes
const routes = [
    {
        path: "/app",
        name: "app",
        component: App,
        children: [
            {
                path: "/login", // 登录
                name: "login",
                component: Login,
            },
            {
                path: "/home", // 首页
                name: "home",
                component: Home,
            },
            {
                path: "/classify", // 分类页面
                name: "classify",
                component: Classify
            },
            {
                path: "/shopping-cart", // 购物车页面
                name: "ShoppingCart",
                component: ShoppingCart
            },
            {
                path: "/personal", // 个人中心页面
                name: "personal",
                component: Personal
            },
            {
                path: "/search", // 搜索页面
                name: "search",
                component: Search
            },
        ]
    },
    {
        path: "*", // 其他未定义路由重定向到 home页面
        redirect: { name: 'home' }
    }
]

const router = new VueRouter({
    routes,
    mode: "hash"
})

export default router;