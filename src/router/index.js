//传入vue
import Vue from "vue"
//导入路由模块
import VueRouter from "vue-router"

//全局安装路由
Vue.use(VueRouter);

//分别导入四个组件
import Takeout from "../components/Takeout"
import Discovery from "../components/Discovery"
import Order from "../components/Order"
import Mine from "../components/Mine"
//引入搜索组件
import Search from "../components/Search"
//引入完成订单组件
import Checkout from "../components/Checkout"
//引入商铺详情组件
import Storedetail from "../components/Storedetail"
//引入登录页面
import Login from "../components/Login"
//引入积分商城页面
import Scoremall from "../components/Scoremall"
//引入发现里的美食
import Foodlike from "../components/Foodlike"


//配置路由规则
const routes = [
    { path: '', component: Takeout },
    { path: '/takeout', component: Takeout },
    { path: '/discovery', component: Discovery },
    { path: '/order', component: Order },
    { path: '/mine', component: Mine },
    //配置搜索模块
    { path: '/search', component: Search },
    //配置完成订单模块
    { path: "/checkout", component: Checkout },
    //配置商铺详情模块
    { path: "/storedetail", component: Storedetail },
    //配置登录页面
    { path: "/login", component: Login },
    //配置积分商城模块
    { path: "/scoremall", component: Scoremall },
    //配置foodUlike模块
    { path: "foodlike", component: Foodlike }
]

//创建路由实例
const router = new VueRouter({
    mode: 'history',
    routes
})

//导出路由模块
export default router