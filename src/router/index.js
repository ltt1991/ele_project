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
//引入我的地址页面
import Myaddress from "../components/Myaddress"
//引入我的跳转到登录页面
import Loginmy from "../components/Loginmy"
//引入添加地址详情页
import Addaddress from '../components/Addaddress'
//引入编辑地址详情页
import Editaddress from '../components/Editaddress'
//引入404页面
import NotFound from '../components/NotFound'
//引入登录后的我的页面
import Mine_enter from '../components/Mine_enter'
//引入账户信息的页面
import Account from '../components/Account'
//引入登录页面的信息验证
import Note from '../components/Note'
//引入登录页面的密码登录
import Password from '../components/Password'
//引入订单页面的信息验证
import Login_note from '../components/Login_note'
//引入订单页面的密码登录
import Login_password from '../components/Login_password'

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
    { path: "/login", component: Login,children:[
        {path:"", component:Login_note},
        {path:"login_note", component:Login_note},
        {path:"login_password", component:Login_password}
    ] },    
    //配置积分商城模块
    { path: "/scoremall", component: Scoremall },
    //配置foodUlike模块
    { path: "/foodlike", component: Foodlike },
    //配置myAddress模块
    { path: "/myaddress", component: Myaddress },
    //配置我的里面登录页面
    { path: "/loginmy", component: Loginmy,children:[
        {path:"", component:Note},
        {path:"note", component:Note},
        {path:"password", component: Password}
    ] },
    //配置添加地址模块
    { path: "/addaddress", component: Addaddress },
    //配置编辑地址模块
    { path: "/editaddress", component: Editaddress },
    //配置404模块
    { path: '*', component: NotFound },
    //配置登录后的我的页面
    { path: "/mine_enter", component: Mine_enter },
     //配置账户信息的页面
     { path: "/account", component: Account }
]

//创建路由实例
const router = new VueRouter({
    mode: 'history',
    routes
})

//导出路由模块
export default router