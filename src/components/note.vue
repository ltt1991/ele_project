<template>
    <div>
       <!-- 登录页面 -->
        <div id="enter">
            <div class='enter'>                
                <div class="main_1" >
                    <input type="" placeholder="手机号" class="gain" v-model="v" :style="v.length > 11 ? 'text-decoration:underline' :'text-decoratin:none'">
                    <b  id="change_1" class="verify" :style="v.length > 10 ? 'color:#1b9dff':'color:#ccc' " @click="change">验证码</b>
                    <input type="" placeholder="验证码">
                    <p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意 <a href="https://h5.ele.me/service/agreement/">《用户服务协议》</a></p>
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
            ],
            v:''        
        };
    },   
    methods:{
        login(item){
                item.flag = false  
                this.$store.dispatch("login");         
                var that = this
                var timeOutId = window.setTimeout(go, 2000);  // 3秒中之后执行函数go中的代码
                    function go () {
                        that.$router.push("/mine_enter");
                    }	
                    window.clearTimeout(this.timerId);  //取消这个超时调用，如果超时调用已经执行完毕，就什么也不会发生。          
                if(true){
                    console.log(this);
                    item.value = "登录中···"
                }
        },
        change(){
            function getCode(n) {
                var all = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
                var b = "";
                for (var i = 0; i < n; i++) {
                var index = Math.floor(Math.random() * 62);
                b += all.charAt(index);
                }
                return b;
            };
            document.getElementById("change_1").innerHTML = getCode(4);
            this.style = "color=red";
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
        font-size: 31px;
        position: absolute;
        right: 24px;
        top:73px;
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
    
</style>