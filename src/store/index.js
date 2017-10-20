import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    shoplist: [],
    show_flag: false,
    //声明一个变量来存放头部的信息
    headerlist: [],
    historylist: []
}
const mutations = {
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
    SEARCH(state, name) {
        state.historylist.push(name);
    }
}
const actions = {
    add(context, value) {
        context.commit('ADD', value);
    },
    down(context, value) {
        context.commit('DOWN', value);
    },
    checkout(context, headerlist) {
        context.commit('CHECKOUT', headerlist);
    },
    search(context, name) {
        context.commit('SEARCH', name);
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
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})