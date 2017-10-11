// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入适配
import Flexible from "../static/js/flexible.js"
// Flexible(window);

//引入ui组件
// import Mint from "mint-ui";
// import 'mint-ui/lib/style.css'
// Vue.use(Mint);

//按需引入部分组件
// import { Cell, Header } from "mint-ui";
// Vue.component(Cell.name, Cell);
// Vue.component(Header.name, Header);

// 引入路由模块
import router from "../src/router"

//引入store仓库
import store from './store'

//导入xaios来处理网络请求,这不是vue本身的模块,这是官方推荐使用的三方模块作为网络请求
import axios from 'axios'

//因为这块不是vue的模块,所以不能使用vue.use()来进行注册,我们使用原型链的机制来注册
Vue.prototype.axios = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
})