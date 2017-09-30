<template>
	<div id="mine">
		<div class="mine_top" >
			<p>
				<img src="../assets/mine_img/back.png">
				<h2 class="h1">我的</h2>
			</p>
			<div class="circle">
				<div class="circle_1"><img src="../assets/mine_img/mine.png" ></div>				
				<div class="circle_2" @click="loginmy">                    
					<div ></div>
					<p>登录/注册</p>
                    <img src="../assets/mine_img/backward_1.png" @click="loginmy">
					<span><img src="../assets/mine_img/ihone.png" > 登录后享受更多特权</span>
					
				</div>				
			</div>
		</div>
		<div class="mine_centre">
            <dl>
                <dt><img src="../assets/mine_img/discount.png"></dt>
                <dd>优惠</dd>
            </dl>
             <dl>
                <dt><img src="../assets/mine_img/integral.png"></dt>
                <dd>积分</dd>
            </dl>
		</div>
		<div class="mine_buttom">
			<ul class="main_buttom_address" @click="Myaddress">
                <li>
                    <img src="../assets/mine_img/site.png">
                    我的地址
                    <span><img src="../assets/mine_img/backward.png"></span>
                </li>
			</ul>
			<ul class="main_buttom_address">
                <li @click="score">
				<img src="../assets/mine_img/store.png">
				积分商城
				<span><img src="../assets/mine_img/backward.png"></span>
                </li>
			</ul>
			<ul class="main_buttom_address">
                <li>
				<img src="../assets/mine_img/serve.png">
				服务中心
				<span><img src="../assets/mine_img/backward.png"></span>
                </li>
			</ul>
			<ul class="main_buttom_address">
                <li>
				<img src="../assets/mine_img/app.png">
				下载饿了么APP
				<span><img src="../assets/mine_img/backward.png"></span>
                </li>
			</ul>
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
      loginmy(){
          this.$router.push("/loginmy");
      },
      score(){
          this.$router.push("/scoremall");
      },
      Myaddress(){
          this.$router.push("/myaddress");
      }
  }

}
</script>
<style lang="css" scoped>

    html{
    background-color: #f5f5f5;
    }
    .mine_buttom>ul{
        width: 100%;
        height: 1.3rem;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        margin-top: .266667rem;
        font-size: .426667rem;
        line-height: .453333rem;
        background: #fff;
    }
    .mine_buttom>ul>li{
        line-height: 1.3rem;
    }
    .mine_buttom>ul>li>img{
        width: .5rem;
        height: .6rem;
        margin: .35rem .3rem 0 .35rem;
        float: left;
    }
    .mine_buttom>ul>li>span>img{
        float: right;
        width: .3rem;
        height: .3rem;
        margin: .45rem .28rem;
    }
    .mine_buttom{
        background-color: #f5f5f5;
    }
    .circle_2>img{
        width: .4rem;
        height: .4rem;
        margin: .2rem .2rem;
        float: right;
        position: absolute;
        top: 2.20rem;
        right: 40px;
    }
    #mine{
        background-color: #f5f5f5;
        width: 100%;
        height:15rem;
    }
    .mine_top{
        background-color:#008eff;
        height: 4.026rem;
        width: 100%;
    }
    .mine_top>p>img{
        margin:.32rem 0 0 .32rem;
        width: 0.426rem;
        height: 0.52rem;
        float: left;
    }
    .mine_top>p>h1{
        display: block;
        font-size: 2em;    
        -webkit-margin-before: 0.67em;
        -webkit-margin-after: 0.67em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        font-weight: bold;
        transform: translateX(-50%);
    }
    .h1{
        font-weight: 800;
        color:white;
        width: 100%;
        text-align: center;
        height:1.15rem;
        line-height: 1.15rem;
    }
    .circle{
        padding: .666667rem .4rem;
        color: #fff;
    }
    .circle_1{
        float: left;
        width: 1.6rem;
        height: 1.6rem;
        font-size: 1.6rem;
        line-height: 1.6rem;
        border-radius: 50%;   
        vertical-align: middle;
    }
    .circle_1>img{
        float: left;
        width: 1.6rem;
        height: 1.6rem;
        font-size: 1.6rem;
        line-height: 1.6rem;
        border-radius: 50%;   
        vertical-align: middle;
    }
    .circle_2{
        float: left;
        margin-top: .22rem;
        margin-left: .48rem;
        -webkit-box-flex: 1;
    }
    .circle_2>img{
        float: right;
    }
    .circle_2>p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: .56rem;
        margin-bottom: .213333rem;
        font-weight: 700;
        color:white;
    }
    .circle_2>span{
        font-size: .32rem;
    }
    .circle_2>span>img{
        width: .25rem;
        height: .35rem;
        vertical-align: middle;
    }
    .mine_centre{
        width: 100%;
        height: 2.123rem;
        padding-top:0.1px;
    }
    .mine_centre{
        background-color: white;
    }
    .mine_centre>dl{
        float: left;
        width: 49%;
        height: 2.123rem;
        text-align: center;	    
    }
    .mine_centre>dl>dt{
        margin-top: 0.4rem;
    }
    .mine_centre>dl>dt>img{
        width: .8rem;
        height: .8rem;
    }
    .mine_centre>dl>dd{
        margin-top: .133333rem;
        font-size: .32rem;
        line-height: .373333rem;
        font-weight: 500;
        color: #666;
        font-weight: 700;
    }
    .mine_centre>dl:first-child{
        border-right:1px solid #ddd;
    }
    .mine_buttom{
        background-color: #f5f5f5;	
        height: 70%;
        width: 100%;
    } 
</style>




