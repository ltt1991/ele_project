<template>
    <div>
       <!-- 登录页面 -->
        <div id="enter">
            <div class='enter'>
                <div class="header_1">
                    <img src="../assets/mine_img/logo.png">
                    <p>美好生活 &emsp;触手可得</p>
                </div>
                <div class="main_1" >               
                    
                    <span v-for="item in flaglist" :key='item.id' @click="activeFn(item,flaglist)" :class="{active:item.flag}">
                         <router-link :to="item.linkurl">{{item.mess}}</router-link>
                    </span>
                    <router-view></router-view>
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
            flaglist:[
                {'mess':'短信验证','linkurl':'/login/login_note','flag':true},
                {'mess':'密码登录','linkurl':'/login/login_password','flag':false}
            ]
        };
    },
    methods:{
        activeFn(item,list){
            for(var n of list){
                n.flag = false;
            }
            item.flag= true;
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
        margin-right: 84px;
        margin-left: 142px;
        padding-bottom: 4px;
        cursor: pointer;        
    }
    .enter .active{
        font-size: 30px;
        font-weight: 600;
        color:#2395ff;
        border-bottom: 2px solid #2395ff;

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
    
</style>