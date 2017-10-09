<template>
  <div id="app">
    <tabbar v-show="isShow()"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Tabbar from "./components/Tabbar"
export default {
  name: 'app',
  data(){
      
      return{
          arr:["/takeout","/discovery","/order","/mine","/","/mine_enter"]
      }
  },
  components: {
      Tabbar
  },
  methods:{
      isShow(){
          var path =this.$route.path;
          return this.arr.indexOf(path) == -1 ? false : true;
      }
  }
}
</script>

<style>
    *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    }
    a{
    text-decoration: none;
    color: inherit;
    }
    li{
    list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p {
    font-weight: 400;
    }
    #app {
        box-sizing: border-box;
        background-color: #f5f5f5;
        color: #333;
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
        line-height: 1.2;
    }
    /* #app .tabbar{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 1.6rem;
        background: #fff;
        border-top: 2px solid #f5f5f5;
        padding-top: 0.3rem;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;  
    }
    .tabbar a{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    width: 25%;
    text-align: center;
    }
    #app .tabbar a img {
        width: 0.55rem;
        height: 0.55rem;
    }
    #app .tabbar a span{
        color: #666;
        font-size: 0.26667rem;
    }
    #app .tabbar .active{
        color: #0089dc;
    } */
</style>
