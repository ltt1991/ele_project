<template>
    <div id="order">
        
        <!-- 登录页面 -->
        <div class="header">
            <img src="../assets/mine_img/back.png" alt="">          
            <h1>订单</h1>
        </div>
        <div class="main">
            <img src="../assets/mine_img/enter.gif" alt="">
            <p>登录后查看外卖订单</p>
            <span>立即登录</span>
        </div>
        <div class="footer">

        </div>

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