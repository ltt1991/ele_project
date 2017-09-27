<template>
    
       <!-- 底部菜单 -->
   <div class="tabbar">
      <router-link to="/takeout"> 
          <div>
            <img src="../assets/takeout_img/footer_logo.png" alt="">
          </div>
          <span class="active">外卖</span>
      </router-link>
      <router-link to="/discovery">
          <div>
              <img src="../assets/takeout_img/find.png" alt="">
          </div>
          <span>发现</span>
      </router-link>
      <router-link to="/order">
           <div>
              <img src="../assets/takeout_img/order.png" alt="">
           </div>
           <span>订单</span>
      </router-link>
      <router-link to="/mine">
          <div>
             <img src="../assets/takeout_img/mine.png" alt="">
          </div>
          <span>我的</span>
      </router-link>
   </div>

</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    #app .tabbar{
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
}
</style>
