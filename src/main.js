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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})