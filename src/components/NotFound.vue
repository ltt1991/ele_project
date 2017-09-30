<template>
    <div>
        <div class="lost"> 
            <p>404</p>  
            <span>您的页面找不到了。。。</span>        
            <img src="../assets/integral_img/lose_1.gif" alt="">  
            <!-- <img src="../assets/integral_img/lose.gif" alt="">    -->        
        </div>
        <p class="back" @click="home">点击返回首页</p>
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
      home(){
          this.$router.push("/takeout")
      }
  }
}
</script>
    
<style lang="css" scoped>
     .lost{
        width:100%;
        height:50%;
        background-color: #efefef;
        text-align: center;

    }
    .lost>p{
        padding-top: 1.3rem;
        font-size: 1.8rem;
        color:#999;
        line-height: 4rem;
    }
    .lost>span{
        color:#fff;
        font-size: .5rem;
        padding: .5rem .4rem;
        background-color:rgba(153, 153, 153,0.46);
        display: inline-block;
        border-radius: 8px;
    }
    .lost>img{
        transform: translate(-50% -50%);
        padding-bottom:2.85rem;
        width: 100%;
        height:60%;        
    }
    .back{
        text-align: center;
        background-color: #efefef;
        color: black;
        height: 120px;
        font-size: 28px;
    }
</style>