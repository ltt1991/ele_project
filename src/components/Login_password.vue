<template>
    <div>
       <!-- 登录页面 -->
        <div id="enter">
            <div class='enter'>                
                <div class="main_1" >
                    <input type="" placeholder="手机/邮箱/用户名" >
                    <input type="" placeholder="密码">
                </div>
                <!-- <div class="password">
                    <div></div>
                    <span>...</span>
                </div> -->
                <div class="password_1">
                    <div></div>
                    <span>abc</span>
                </div>
                <div class="footer" v-for="item in list" :key="item.id">
                    <span @click="login(item)" :class="{active:item.flag}">{{ item.value }}</span>
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
        flag:false,
        list:[
            {value:"登录"}
        ]        
    };
  },
   methods:{
      login(item){
            item.flag = false          
            var that = this
            var timeOutId = window.setTimeout(go, 2000);  // 3秒中之后执行函数go中的代码
                function go () {
                    that.$router.push({
                        path:"/order",
                        query:{
                            show:true
                        }
                    });
                }	
                window.clearTimeout(this.timerId);  //取消这个超时调用，如果超时调用已经执行完毕，就什么也不会发生。          
            if(true){
                console.log(this);
                item.value = "登录中···"
            }
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
        padding-top: 30px;
        background-color: white;
    }
    .enter{	
        justify-content: flex-start;
        width: 100%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        width: 600px;
        margin: 0 auto;
        position: relative;
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
        top:76px;
        color: #ccc;
        font-weight: normal
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
    .footer>p{
        text-align: center;
        width: 100%;
        margin-top:37px;
        text-align: center;
        color: #999;
        font-size: 28px;
    }
    .footer .active{
        background-color: #c5c5c5;
    }
    .password{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 6px;
        width: 83px;
        height: 33px;
        color: #999;
        font-size: 36px;
        text-align: right;        
        /* float: right; */
        border: 1px solid #ccc9c9;
        border-radius: 23px;
        -webkit-transition: background-color .3s,border-color .3s;
        transition: background-color .3s,border-color .3s;
        position: absolute;
        right: 32px;
        bottom: 242px;
    }
    .password>div{
        position: absolute;
        top: -1px;
        left: -1px;
        width: 32px;
        height: 32px;
        border: 1px solid #ddd;
        border-radius: 50%;
        background: #fff;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        -webkit-transition: -webkit-transform .3s;
        transition: -webkit-transform .3s;
        transition: transform .3s;
        transition: transform .3s,-webkit-transform .3s;
    }
    .password>span{
        float: right;
        margin-left: 29px;
        margin-bottom: 19px;
    }
    .password_1{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 6px;
        width: 83px;
        height: 33px;
        color: #fff;
        font-size: 24px;
        text-align: right;        
        /* float: right; */
        border: 1px solid #ccc9c9;
        border-radius: 23px;
        -webkit-transition: background-color .3s,border-color .3s;
        transition: background-color .3s,border-color .3s;
        position: absolute;
        right: 32px;
        bottom: 242px;
        background-color: #1b9dff;
    }
    .password_1>div{
        position: absolute;
        top: -1px;
        left:50px;
        width: 32px;
        height: 32px;
        border: 1px solid #ddd;
        border-radius: 50%;
        background: #fff;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        -webkit-transition: -webkit-transform .3s;
        transition: -webkit-transform .3s;
        transition: transform .3s;
        transition: transform .3s,-webkit-transform .3s;
    }
    .password_1>span{
        margin-left: 2px;
        margin-bottom: 6px;
    }
    
</style>