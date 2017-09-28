<template>
<div>
    <div class="banner">
        <img src="../assets/integral_img/banner.png" alt="">
    </div>
    <div class="banner-buttom">
        <div>
            <img src="../assets/integral_img/jewel.png" alt="">
            <span>积分</span>
            <i>0</i>
        </div>
         <div>
            <img src="../assets/integral_img/record.png" alt="">
            <span>兑换记录</span>
        </div>
    </div>
    <div class="list">
        <div>
            <img src="../assets/integral_img/list.png" alt="">
            <p>今日新品</p>
        </div>
        <div>
            <img src="../assets/integral_img/list_1.png" alt="">
            <p>红包专区</p>
        </div>
        <div>
            <img src="../assets/integral_img/list_2.png" alt="">
            <p>0元兑换</p>
        </div>
        <div>
            <img src="../assets/integral_img/list_3.png" alt="">
            <p>优惠礼券</p>
        </div>
        <div>
            <img src="../assets/integral_img/list_4.png" alt="">
            <p>食品饮料</p>
        </div>
        <div>
            <img src="../assets/integral_img/list_5.png" alt="">
            <p>数码家电</p>
        </div>
        <div>
            <img src="../assets/integral_img/list_6.png" alt="">
            <p>日常家居</p>
        </div>
        <div>
            <img src="../assets/integral_img/list_7.png" alt="">
            <p>所有商品</p>
        </div>
    </div>
    <div class="main">
         <div>
            <img src="../assets/integral_img/main.png" alt="">
         </div>
         <div>
             <img src="../assets/integral_img/main_1.png" alt="" class="main_img">
             <img src="../assets/integral_img/main_2.png" alt="">
         </div>
    </div>
    <div class="main_1">
        <p>大家都在说</p>
        <div class="speak">
            <div class="speak_top">
                <p>饿配送二日体验卡</p>
                <b>2500</b>
                <i>积分</i>
                <span>特价</span>
            </div>
            <div class="speak_bottom">
                <img src="../assets/integral_img/main_3.png" alt="">
            </div>
        </div>
        <div class="speak">
            <div class="speak_top">
                <p>饿配送二日体验卡</p>
                <b>2500</b>
                <i>积分</i>
                <span>特价</span>
            </div>
            <div class="speak_bottom">
                <img src="../assets/integral_img/main_4.png" alt="">
            </div>
        </div>
        <div class="speak">
            <div class="speak_top">
                <p>饿配送二日体验卡</p>
                <b>2500</b>
                <i>积分</i>
                <span>特价</span>
            </div>
            <div class="speak_bottom">
                <img src="../assets/integral_img/main_5.png" alt="">
            </div>
        </div>
        <div class="speak">
            <div class="speak_top">
                <p>饿配送二日体验卡</p>
                <b>2500</b>
                <i>积分</i>
                <span>限时抢购</span>
            </div>
            <div class="speak_bottom">
                <img src="../assets/integral_img/main_6.png" alt="">
            </div>
        </div>
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
  }
}
</script>
    
<style lang="css" scoped>
    .footer{
        float: left;
        width: 100%;
        height: 1.6rem;
    }
    .speak_top>i{
        font-style: normal;
        font-weight: 400;
        font-size: .32rem;
        line-height: 1.3;
        color: #999;
        text-align: left;
        margin-bottom: .09rem;
    }
    .speak_top>b{
        font-weight: 400;
        font-size: .38rem;
        line-height: 1.3;
        color: #ff6000;
        text-align: left;
        margin-bottom: .09rem;
    }
    .speak_top>span{
        background-color: #fe4a21;
        color: #fff;
        padding: .05rem .1rem;
        margin-left: .125rem;
        border-radius: 5px;
        text-align: center;
        vertical-align: top;
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        display: inline-block;
        font-size: .3rem;
        margin-top: .06rem;
    }
    .speak_top>p{
        font-weight: 400;
        font-size: .38rem;
        line-height: 1.3;
        color: #333;
        text-align: left;
        margin-bottom: .09rem;
    }
    .speak_bottom{
        width: 100%;
        padding: 0 .33rem .23rem .33rem;
    }
    .speak_bottom>img{
        width: 100%;
        height: 2.6rem;
    }
    .speak_top{
        padding:.3rem .05rem 0rem .3rem;
    }
    .speak{
        width: 50%;
        border-right:3px solid #f0f0f0; 
        border-bottom:3px solid #f0f0f0; 
        float: left;
        background-color: white;
    }
    .main_1>p{
        height: 1rem;
        line-height: 1rem;
        padding-left: .42rem;
        background-color: #fff;
        font-size: .40rem;
        color: #666;
        border-bottom:3px solid #f0f0f0;
    }
    .main_1{
        background-color: white;
    }
    .main>div>img{
        width: 100%;
    }
    .main_img{
        border-bottom: 3px solid #efefef;
    }
    .main>div{
        width: 50%;
        float:left;
        border-right:3px solid #efefef;
    }
    .main{
        height: 3.7rem;
        width: 100%;
        /* padding-top: .26rem; */
        background-color: white;
        border-bottom: 20px solid #efefef;
    }
    .list>div>img{
        width: 1rem;
        height: 1rem;
        margin-bottom: .13rem;
        border-radius: 100%;
    }
    .list>div>p{
        font-size: .33rem;
        color:#666;
    }
    .list>div{
        width: 25%;
        float: left;
        text-align: center;
        margin-bottom: .45rem;
    }
    .list{
        height: auto;
        padding-left: 0.056rem;
        padding-right: 0.056rem;
        position: relative;
        background: #FFF;
        width: 100%;
        margin-bottom: .28rem;
        padding-top: .33rem;
        padding-bottom: 3.9rem;
        overflow: hidden;
        background-color: white;
        width: 100%;
        height: 4.35rem;
        margin-top: .3rem;
    }
    .banner-buttom>div>i{
        vertical-align: middle;
        color: #ff6000 !important;
        font-style: normal;
        font-size: .45rem;
    }
    .banner-buttom>div>span{
        vertical-align: middle;
        font-size:.38rem;
        display: inline;
        
    }
    .banner-buttom>div>img{
        display: inline-block;
        width: .5rem;
        height: .5rem;
        vertical-align: middle;
    }
    .banner-buttom>div{
        border-right: 1px solid #e5e5e5;
        padding: .1rem 0;
        display: table-cell;
        text-align: center;
        width: 50%;
        margin-bottom: .08rem;
    }
    .banner-buttom{
        margin-bottom: .08rem;
        display: table;
        height: 1.38rem;
        width: 100%;
        padding: .3rem 0;
        background-color: #fff;
        margin-bottom: .08rem;
    }
    .banner>img{
        width: 100%;
        height:4.4rem;
    }
    .banner{
        width: 100%;
        height: 4.4rem;
        overflow: hidden;
    }
</style>