<template>
    <div id="order">
      <div class="header">
          <img src="../assets/mine_img/back.png" alt="">          
          <h1>订单</h1>
      </div>
      <div class="main">
          <img src="../assets/mine_img/enter.gif" alt="">
          <p>登录后查看外卖订单</p>
          <span>立即登录</span>
      </div>
      <div class="footer"></div>
    </div>
</template>

<style lang="css" scoped>
    .footer{
        background-color: #f5f5f5;
        height:5rem;
    }

    #order{
        width: 100%;
        height: 100%;
    }
    .main>span{
        padding: .266667rem;
        min-width: 3.2rem;
        border: none;
        display: block;
        border-radius: .053333rem;
        background-color: #56d176;
        color: #fff;
        text-align: center;
        font-size: 1.2em;
        font-family: inherit;
        width: 3.2rem;
        margin: auto;
    }
    .main>p{
        margin: .333333rem 0 .266667rem;
        color: #6a6a6a;
        font-weight: 400;
        text-align: center;
        font-size: .453333rem;
    }
    .main>img{
        
    }
    html{
        background-color: #f5f5f5;
    }
    .main{
        margin-top: 2.66rem;
        text-align: center;
    }
   .header>img{
        margin: .32rem 0 0 .32rem;
        width: 0.426rem;
        height: 0.52rem;
        float: left;
   }
   h1{
        position: absolute;
        top: 0;
        left: 50%;
        height: 1.173333rem;
        max-width: 50%;
        font-size: 1em;
        line-height: 1.173333rem;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
   }
   .header{
       width: 100%;
       height: 1.173333rem;
       color: #fff;
       font-size: .48rem;
       background: #2395ff;
   }
</style>

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
    
</style>
