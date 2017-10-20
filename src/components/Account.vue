<template>
    <div>
        <div class="header">
            <img src="../assets/mine_img/back.png" alt="" @click="fn">          
            <h1>账户信息</h1>
        </div>
        <div>
            <ul class="main-cx">
                <li>
                    <b>头像</b>
                    <img src="../assets/mine_img/main_my.png" alt="" class="main_my">
                    <span><img src="../assets/mine_img/backward.png" alt=""></span>
                </li>
               
                <li class="last_child">
                    <b>用户名</b>
                    <em>3****2</em>
                    <span><img src="../assets/mine_img/backward.png" alt=""></span>
                </li>
                
            </ul>
            <h2>账号绑定</h2>
            <ul class="main_sj">
                <li>
                    <img src="" alt="">
                    <b>手机</b>
                    <em>158****2930</em>
                    <span><img src="../assets/mine_img/backward.png" alt=""></span>                
                </li>
            </ul>
            
            <h2>安全设置</h2>
            <ul class="main_enter">
                <li>
                    登录密码
                    <i>未设置</i>
                    <span><img src="../assets/mine_img/backward.png" alt=""></span>
                </li>
            </ul>
            <p class="button" @click="callback">退出登录</p>
        </div>
        <div class="footer">

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
      fn(){
          history.back();
      },
      callback(){
          this.$router.push("/mine");
          this.$store.dispatch("outlogin");  
      }
  }
}
</script>
    
<style lang="css" scoped>
    .header>img{
        margin: .32rem 0 0 .32rem;
        width: 0.5rem;
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
    .header_height{
        height: 1.173333rem;
        width: 100%;
    }
    .main-cx{
        background-color: #fff;
        width: 100%;
        font-size: .426667rem;
        color: #333;
    }
    .main-cx>li{
        padding: .3rem .373333rem;
        cursor: pointer;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .main_my{
        height: 1.333333rem;
        width: 1.333333rem;
        margin-left: 6.5rem;        
    }
    ul>li>span>img{
        float: right;
        fill: #ddd;
        height: .48rem;
        display: inline-block;
        line-height: 1.2rem;
        padding-top: .133333rem;
    }
    .last_child{
        padding-top: 5px;
        padding: .4rem .37rem;
        border-top:3px solid #eee;
    }
    .last_child>em{
        font-style: normal;
        margin-left: 5.8rem;
    }
    h2{
        margin: .426667rem 0 .186667rem .373333rem;
        font-size: .32rem;
        color: #999;
    }
    .button{
        display: block;
        width: 100%;
        text-align: center;
        padding: .373333rem 0;
        margin: .533333rem 0;
        color: #ff5339;
        border-radius: .08rem;
        font-size: .426667rem;
        font-weight: 700;
        background-color: #fff;
    }
    .main_sj{
        background-color: #fff;
        width: 100%;
        font-size: .426667rem;
        color: #333;
    }
    .main_sj>li{
        padding: .373333rem;
        border-top: .013333rem solid #eee;
    }
    .main_sj>li>em{
        font-style: normal;
        margin-left:5rem;
    }
    .main_enter{
        background-color: #fff;
        width: 100%;
        font-size: .426667rem;
        color: #333;
    }
    .main_enter>li{
        padding: .373333rem;
        border-top: .013333rem solid #eee;
    }
    i{
        font-style: normal;margin-left:5.6rem;
        color:#2395ff;
    }
    .footer{
        height: 6.71rem;
        background-color: #f5f5f5;
    }
</style>