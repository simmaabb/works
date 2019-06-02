import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Cookies from 'js-cookie'
import '@/styles/index.scss' // global css
// import './icons' // icon
import './permission' // permission control
Vue.config.productionTip = false

import "./styles/index.scss";

import Vant from "vant";
Vue.use(Vant)

import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"
Vue.component("Header", Header)
Vue.component("Footer", Footer)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')