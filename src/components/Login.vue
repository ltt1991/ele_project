<template>
    
    <div>
        <!-- 登录页面 -->
        <div id="enter">
            <div class='enter'>
                <div class="header_1">
                    <img src="../assets/mine_img/logo.png">
                    <p>美好生活 &emsp;触手可得</p>
                </div>
                <div class="main_1">
                    <span>短信登录</span>
                    <span >密码登录</span>
                    <input type="" placeholder="手机号" name="获取验证码">
                    <b>获取验证码</b>
                    <input type="" placeholder="验证码">
                    <p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意 <a href="">《用户服务协议》</a></p>
                </div>
                <div class="footer">
                    <span @click="enter">登录</span>
                    <p>关于我们</p>
                </div>
            </div>
        </div>      
        
    </div>  

</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        
    };
  },
  methods:{
      enter(){
          this.$router.push({
              path:"/order",
              query:{
                  show: true
              }
            });
        //   var history_order = document.getElementById("history_order");
        //   console.log(history_order);
        //   history_order.style.display="block";

        //   document.getElementById("enter").style.display="none";
      }      
  }
  
}
</script>

    
<style lang="css" scoped>
    /* 登录页面 */
    #enter{
        height: auto;
        width: 100%;
        min-height: 100%;
        padding-top: 65px;
        background-color: white;
    }
    .enter{	
        justify-content: flex-start;
        width: 100%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        width: 600px;
        margin: 0 auto;
    }
    .header_1{
        text-align: center;
    }
    .header_1>img{
        text-align: center;
        width: 280px;
    }
    .header_1>p{
        text-align: center;
        color:#008eff;
        font-size:28px;
    }
    .main_1{
        margin-top:75px;
        position: relative;

    }
    .main_1>span{
        display: block;
        float: left;
        font-size: 28px;
        padding-bottom: 4px;
        cursor: pointer;
        margin: auto;
        text-align: center;    
        
    }
    .main_1>span:first-of-type{
        text-align: center;
        color: #2395ff;
        margin-right: 84px;
        margin-left: 142px;
        border-bottom: 2px solid #2395ff;
        font-size: 30px;
        padding-bottom: 4px;
        cursor: pointer;
        font-weight: 700;
    }
    .main_1>input{
        width: 100%;
        height:100px;
        left: 0;
        margin-top: 30px;
        padding-left: 24px;
        border: 1px solid #ddd;
        border-radius: 6px;
        color: #6d6969;
        -webkit-appearance: none;
        font-size: 28px;
    }
    .main_1>b{
        font-size: 26px;
        position: absolute;
        right: 24px;
        top: 104px;
        color: #ccc;
        font-weight: normal
    }

    .footer>span{
        display: block;
        width: 100%;
        height: 77px;
        margin-top: 62px;
        border-radius: 4px;
        background: #4cd96f;
        color: #fff;
        cursor: pointer;
        text-align: center;
        font-size: 34px;
        line-height: 77px;
    }
    .main_1>p{
        margin-top: 24px;
        color: #999;
        font-size: 28px;
        line-height: 40px;
    }
    .main_1>p>a{
        color: #2395ff;
    }
    .footer>p{
        text-align: center;
        width: 100%;
        margin-top:37px;
        text-align: center;
        color: #999;
        font-size: 28px;

    }



    /* 历史订单页 */
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
        font-weight: 800;
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
    .list{
        margin-top: .266667rem;
        background-color: #fff;
        padding: .373333rem 0 0 .4rem;
    }
    .list{
        
        -webkit-box-flex: 0;
    }
    .ordercard-body{
        border-bottom: 1px solid #eee;
    }
    .ordercard-body>img{
        margin-right: .266667rem;
        float: left;
        margin-bottom: 1.26rem;
    }
    .ordercard-head{
        border-bottom: 1px solid #eee;
        padding-right: .346667rem;
        padding-bottom: .266667rem;
    }
    .ordercard-head>p{
        font-size: .426667rem;
        line-height: 1.5em;
        color: #333;
        width: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .ordercard-head>span{
        font-size: .346667rem;
        float: right;
        margin-top:10px;
    }
    .ordercard-head>b{
        font-weight:normal;
        font-size: .293333rem;
        color:#999;
    }
    .ordercard-detail{
        padding: .4rem .346667rem .4rem 0;
    }
    .ordercard-detail>p{
        font-size: .346667rem;
        color: #666;
    }
    .ordercard-detail>span{
        flex-basis: 1.6rem;
        text-align: right;
        font-size: .346667rem;
        color: #333;
        font-weight: 700;
        float: right;
    }
    .ordercard-bottom{
        height: 1.4rem;
        background-color: #fff;
        width: 100%;
    }
    .ordercard-bottom>span{
        float: right;
        padding: .133333rem .266667rem;
        border: 1px solid #2395ff;
        border-radius: .053333rem;
        background-color: transparent;
        outline: none;
        font-size: .346667rem;
        color: #2395ff;
        margin: .3rem .4rem;
    }
    #history_order{
        display: none;
        width: 100%;
    }
    .footer_p{
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 100%;
    }
</style>