<template>
  <div id="app">
    
   <!-- 底部菜单 -->
   <div class="tabbar">
     <router-link to="/takeout">外卖</router-link>
     <router-link to="/discovery">发现</router-link>
     <router-link to="/order">订单</router-link>
     <router-link to="/mine">我的</router-link>
   </div>

   <router-view></router-view>
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
  
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
#app .tabbar{
  height: 1.333rem;
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items:center;
  justify-content: space-around;
  z-index: 999;
  background-color: #fff;
  padding-top: .12rem;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);

}
.tabbar a{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
}
</style>
