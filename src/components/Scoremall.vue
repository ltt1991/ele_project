<template>
<div>
    <div class="banner" >
        <swiper :options="swiperOption">
             <!-- slides -->
             <swiper-slide><img src="../assets/integral_img/banner.png" alt=""></swiper-slide>
             <swiper-slide><img src="//yun.duiba.com.cn/images/201710/hc97foo53f.png?x-oss-process=image/format,webp" alt=""></swiper-slide>
             <swiper-slide><img src="//yun.duiba.com.cn/images/201709/7cjl9vpkio.jpg?x-oss-process=image/format,webp" alt=""></swiper-slide>
             <!-- Optional controls -->
             <div class="swiper-pagination"  slot="pagination"></div>
             <div class="swiper-button-prev" slot="button-prev"></div>
             <div class="swiper-button-next" slot="button-next"></div>
             <div class="swiper-scrollbar"   slot="scrollbar"></div>        
        </swiper>
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
    <div class="list"  >
        <div v-for="(item ,index) in list_1" :key="item.id">
            <img :src="item.imgSrc" alt="">
            <p>{{ item.name }}</p>
        </div>
        <!-- <div>
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
        </div> -->
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
        <div class="speak" v-for="(item ,index) in list" :key="item.id">
            <div class="speak_top" >
                <p>{{ item.name }}</p>
                <b>{{ item.itemCredits }}</b>
                <i>{{ item.integral }}</i>
                <span> <em> {{ item.corner}}</em></span>        
            </div>
            <div class="speak_bottom">
                <img :src="item.imgSrc" alt="">
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
    </div class="footer">
    <p>*兑换项和活动皆与设备生产商Apple Inc.无关</p>
    <p>合作请联系：ejifen@ele.me</p>
    <div>
    </div>   
</div>
</template>    
<script>


export default {
  name: "component_name",
  data () {
    return {
       url:"../../static/json/score/score.json",
       url_1:"../../static/json/score/list.json",
       list:[],
       list_1:[],
       swiperOption: {
       // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
       // notNextTick: true,
       // swiper configs 所有的配置同swiper官方api配置
       autoplay: 3000,
       loop:true,
       // direction : 'vertical',
       // effect:"coverflow",
       // grabCursor : true,
       // setWrapperSize :true,
       // autoHeight: true,
       // paginationType:"bullets",
       pagination : '.swiper-pagination',
       paginationClickable :true,
       prevButton:'.swiper-button-prev',
       nextButton:'.swiper-button-next',
       // scrollbar:'.swiper-scrollbar',
       // mousewheelControl : true,
       // observeParents:true,
       // if you need use plugins in the swiper, you can config in here like this
       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
       // debugger: true,
       // swiper callbacks
       // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
       // onTransitionStart(swiper){
       //   console.log(swiper)
       // },
       // more Swiper configs and callbacks...
       }
    };
  },
  created(){
    //   使用axios
    this.axios.get(this.url).then(res =>{
        console.log(res.data);
        // 获取数据信息
        this.list =res.data;
    },err => {
        console.log(err);
    }),
    //   使用axios
    this.axios.get(this.url_1).then(res =>{
        console.log(res.data);
        // 获取数据信息
        this.list_1 =res.data;
    },err => {
        console.log(err);
    })
  },
//   components: {
//         swiper,
//         swiperSlide
//     },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    // computed: {
    // swiper() {
    //     return this.$refs.mySwiper.swiper
    // }
    // },
    mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
    }
  
}

</script>
    
<style lang="css" scoped>

    .footer{
        float: left;
        width: 100%;
        height: 1.6rem;
        text-align: center;
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
    .speak_top>span>em{
        background-color: #fe4a21;
        color: #fff;
        padding: .0rem .1rem;
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
        font-style:normal;
    }
    .speak_top>span{
        width: 100%;
        height: .13rem;
    }
    .speak_top>p{
        font-weight: 400;
        font-size: .38rem;
        line-height: 1.3;
        color: #333;
        text-align: left;
        margin-bottom: .09rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
    .banner img{
        width: 100%;
        height:4.4rem;
    }
    .banner{
        width: 100%;
        height: 4.4rem;
        overflow: hidden;
    }
</style>