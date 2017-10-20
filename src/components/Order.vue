<template>
    <div id="order">
        <div id="denglu" v-show="!flag">
            <!-- 登录页面 -->
            <div class="header">
                <img src="../assets/mine_img/back.png" alt="">          
                <h1>订单</h1>
            </div>
            <div class="denglu_main_top"></div>
            <div class="main">
                <img src="../assets/mine_img/enter.gif" alt="">
                <p>登录后查看外卖订单</p>
                <span @click="login">立即登录</span>
            </div>
            <div class="footer">

            </div>
        </div>


        <!-- 历史订单页面 -->
        <div id="history_order" v-show="flag" >
            <div class="header">
                <img src="../assets/mine_img/back.png" alt="" @click="black">          
                <h1>订单</h1>
            </div>
            <div class="header_height" ></div>
                <div id="list"  class="ordercard-body" v-for="(item,index) in order_list " :key="item.id" >
                    <div class="list">
                        <div>
                            <img :src="item.url" class="order_img">
                            <div class="ordercard-head" >
                                <span>订单已完成</span>
                                <p>{{item.name}}</p>
                                <b>{{ time | datefmt }}</b>					
                            </div>
                            <div class="ordercard-detail">
                                <span>￥{{countPri}}</span>
                                <p>{{item.listname}}等{{countNum}}件商品</p>
                            </div>
                        </div>
                    </div>
                    <div class="ordercard-bottom">
                        <span @click="single">再来一单</span>
                    </div>
                </div>
                <!-- <div id="list">
                    <div class="list">
                        <div class="ordercard-body">
                            <img src="../assets/mine_img/list_1.png">
                            <div class="ordercard-head">
                                <span>订单已完成</span>
                                <p>渝是乎(龙旗广场店)</p>
                                <b>2017-08-11 10:53</b>					
                            </div>
                            <div class="ordercard-detail">
                                <span>￥79.00</span>
                                <p>番茄巴沙鱼等4件商品</p>
                            </div>
                        </div>
                    </div>
                    <div class="ordercard-bottom">
                        <span @click="single">再来一单</span>
                    </div>
                </div>
                <div id="list">
                    <div class="list">
                        <div class="ordercard-body">
                            <img src="../assets/mine_img/list.png">
                            <div class="ordercard-head">
                                <span>订单已完成</span>
                                <p>厨小丫(新都店)</p>
                                <b>2017-08-17 10:53</b>					
                            </div>
                            <div class="ordercard-detail">
                                <span>￥91.00</span>
                                <p>米饭等5件商品</p>
                            </div>
                        </div>
                    </div>
                    <div class="ordercard-bottom">
                        <span @click="single">再来一单</span>
                    </div>
                </div>
                <div id="list">
                    <div class="list">
                        <div class="ordercard-body">
                            <img src="../assets/mine_img/list_1.png">
                            <div class="ordercard-head">
                                <span>订单已完成</span>
                                <p>渝是乎(龙旗广场店)</p>
                                <b>2017-08-11 10:53</b>					
                            </div>
                            <div class="ordercard-detail">
                                <span>￥79.00</span>
                                <p>番茄巴沙鱼等4件商品</p>
                            </div>
                        </div>
                    </div>
                    <div class="ordercard-bottom">
                        <span @click="single">再来一单</span>
                    </div>
                </div> -->
           
                <p class='footer_p'>查看三个月前的外面订单</p>
                <!-- <div class="footer_order"></div> -->
            </div>
            
        </div>       

    </div>
</template>
 <script>
export default {
  name: "component_name",
  data () {
    return {
        time:new Date()
        // show:false
    };
  },
  filters:{
		// input是自定义过滤器的默认参数，input的值永远都是取自于 | 左边的内容
		datefmt:function(input){
			// 过滤器的逻辑：将input的值格式化成 yyyy-MM-dd 字符串输出
			let res= '';
			let year = input.getFullYear();
			let month = input.getMonth() + 1;
            let day = input.getDate();
            let hour = input.getHours();
			let minute = input.getMinutes();
			let second = input.getSeconds();

			res = year +'-' + month +'-'+ day  +  ' ' + hour +':'+ minute + ':' +  second ;

			return res;
		}
	},
  created (){
      this.show = this.$route.query.show
  },
  methods:{
      login(){
          this.$router.push("/login");
          this.$store.dispatch("login");
      },
      single(){
          this.$router.push("/takeout");
          this.$store.dispatch("outlist");
      },
      black(){
          history.back();
      }
  },
   computed:{
        order_list(){
            return this.$store.state.orderlist;
        },
        countPri(){
            return this.$store.getters.countPri;
        },
        countNum(){
            return this.$store.getters.countNum;
        },
        flag(){
            return this.$store.state.flag
        }
    }   
}
</script>

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
        padding: .3rem;
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
    .order_img{
        width: .8rem;
        height: .8rem;
        float: left;
        margin: 5px 20px 80px 0;
    }
    .main>p{
        margin: .333333rem 0 .266667rem;
        color: #6a6a6a;
        font-weight: 400;
        text-align: center;
        font-size: .453333rem;
    }
    html{
        background-color: #f5f5f5;
    }
    .main{
        margin-top: 1.6rem;
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
   .denglu_main_top{
      background-color: #f5f5f5;
      height: 1.16rem;
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
        position:fixed;
        top:0;
        left: 0;
    }
    .header_height{
        height: 1.173333rem;
        width: 100%;
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
        /* display: none; */
        width: 100%;
    }
    .footer_order{
        background-color: #f5f5f5;
        height: 2.6rem;
    }
    .footer_p{
        text-align: center;
        height: 100px;
        color: #a2a0a0;
        line-height: 100px;
        width: 100%;
        /* margin-top: 50px; */
        border-radius: 5px;
        border: 2px solid #e8e8e8;
    }
   
</style>


