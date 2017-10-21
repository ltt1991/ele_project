import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    shoplist: [],
    show_flag: false,
    //声明一个变量来存放头部的信息
    headerlist: [],
    historylist: [],
    urllist: [
        { 'header': '../../static/json/storelist/first_header.json', 'content': '../../static/json/storelist/storelist_first.json' },
        { 'header': '../../static/json/storelist/second_header.json', 'content': '../../static/json/storelist/storelist_second.json' },
        { 'header': '../../static/json/storelist/third_header.json', 'content': '../../static/json/storelist/storelist_third.json' }
    ],
    list: [
        { 'linkurl': '/takeout', 'value': '外卖', 'noselect': '../static/footer_img/eleme.png', 'active': '../static/footer_img/footer_logo.png', flag: true },
        { 'linkurl': '/discovery', 'value': '发现', 'noselect': '../static/footer_img/find.png', 'active': '../static/footer_img/search_active.png', flag: false },
        { 'linkurl': '/order', 'value': '订单', 'noselect': '../static/footer_img/order.png', 'active': '../static/footer_img/order_active.png', flag: false },
        { 'linkurl': '/mine', 'value': '我的', 'noselect': '../static/footer_img/mine.png', 'active': '../static/footer_img/mine_active.png', flag: false }
    ],
    orderlist: [],
    // 判断是否登录
    flag: false
}
const mutations = {
    //加入购物车
    ADD(state, value) {
        let isEdit = false;
        //如果商品已经存在
        for (let tempItem of state.shoplist) {
            if (tempItem.name == value.name) {
                //将标识改为true
                isEdit = true;
                tempItem.count++;
                break;
            }
        }

        //如果商品不存在
        if (!isEdit) {
            //设计购物车商品对象
            let cartProduct = {
                name: value.name,
                price: value.specfoods[0].price,
                count: 1,
            }
            state.shoplist.push(cartProduct);
        }
    },
    //从购物车中移除
    DOWN(state, value) {
        for (let index in state.shoplist) {
            if (state.shoplist[index].name == value.name) {
                state.shoplist[index].count--;
                if (state.shoplist[index].count == 0) {
                    state.shoplist.splice(index, 1);
                }
                break;
            }
        }
    },
    //将json请求回来的数据存放到state中的headerlist中
    CHECKOUT(state, headerlist) {
        state.headerlist.push(headerlist.image_path);
        state.headerlist.push(headerlist.name);
    },
    //搜索框历史记录
    SEARCH(state, name) {
        state.historylist.push(name);
    },
    //历史订单页面的数据
    ADDORDER(state) {
        let orderObj = {
            url: state.headerlist[0],
            name: state.headerlist[1],
            listname: state.shoplist[0].name
        }
        state.orderlist.unshift(orderObj);
    },
    //将shplist和headerlist清空
    OUTLIST(state) {
        state.shoplist = [];
        state.headerlist = [];
    },
    //登录注册多个页面的标识
    LOGIN(state) {
        state.flag = true;
    },
    //退出登录
    OUTLOGIN(state) {
        state.flag = false;
    },
    //tabbar的active样式
    TABACTIVE(state, item) {
        for (var value of state.list) {
            if (value == item) {
                item.flag = true;
            } else {
                value.flag = false;
            }
        }
    },
    //使用再来一单跳转checkout路由的时候将checkout设置为active状态
    CHECKOUTACT(state) {
        for (var value of state.list) {
            value.flag = false;
        }
        state.list[0].flag = true;
    },
    //使用去下订单,将order的状态激活
    ORDERACT(state) {
        for (var value of state.list) {
            value.flag = false;
        }
        state.list[2].flag = true;
    }
}
const actions = {
    //购物车加入购物车
    add(context, value) {
        context.commit('ADD', value);
    },
    //从购物车移除
    down(context, value) {
        context.commit('DOWN', value);
    },
    checkout(context, headerlist) {
        context.commit('CHECKOUT', headerlist);
    },
    search(context, name) {
        context.commit('SEARCH', name);
    },
    checkout(context, headerlist) {
        context.commit('CHECKOUT', headerlist);
    },
    addorder(context) {
        context.commit('ADDORDER')
    },
    outlist(context) {
        context.commit("OUTLIST")
    },
    login(context) {
        context.commit("LOGIN")
    },
    outlogin(context) {
        context.commit("OUTLOGIN")
    },
    tabactive(context, item) {
        context.commit('TABACTIVE', item);
    },
    checkoutact(context) {
        context.commit('CHECKOUTACT');
    },
    orderact(context) {
        context.commit('ORDERACT');
    }
}
const getters = {
    countNum(state) {
        let countNum = 0;
        for (let item of state.shoplist) {
            countNum += item.count;
        }
        return countNum;
    },
    countPri(state) {
        let countPri = 0;
        for (let item of state.shoplist) {
            countPri += item.count * item.price;
        }
        return countPri.toFixed(2);
    },
    list(state) {
        return state.list;
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})