<template>
    <div id="storedetail">
       <div class="header">
          <div class="blur_img"><img :src="headerlist.image_path" alt=""></div>
          <div class="bg_color"></div>
          <div class="callback" @click="backFn">
            <img src="../assets/storedetail_img/add_left.jpg">
          </div>
          <figure>
            <img :src="headerlist.image_path" />
            <figcaption>
              <h3>{{headerlist.name}}</h3>
              <span class="desc">蜂鸟专送 / 28分钟送达 / <strong>{{desc}}</strong></span>
              <span class="mess">公告: {{headerlist.promotion_info}}</span>
            </figcaption>
          </figure>
          <section class="activity">{{activity}}</section>
        </div>
        <nav>
          <a class="active">商品</a>
          <a>评价</a>
          <a>店铺</a>
        </nav>
        <div class="content">
          <div class="leftList">
            <ul>
              <li 
                v-for="(item ,index) in shoplist" 
                :key="item.id"
                :class ="{active:item.is_selected}"
                @click="activeFn(shoplist,item,index)"> <a :href="'#'+item.name">{{ item.name }}</a> </li>
            </ul>
          </div>
          <div class="right">
            <div class="typelist" v-for="(item ,index) in shoplist" :key="item.id">
                <header>
                  <a >
                      <h3> {{ item.name }} </h3>
                      <span> {{ item.description }} </span>
                  </a> 
                </header>

                <div class="list">
                  <figure v-for="(value,index) in item.foods" :key="value.id">
                    <img class="shop_img" :src="value.image_path">
                    <figcaption>
                      <h3>{{value.name}}</h3>
                      <i> {{ value.description }} </i>
                      <span>{{value.tips}} 好评率{{80+parseInt(Math.random()*20)}}%</span>
                      <div class="price">
                        <strong class="newPri">{{value.specfoods[0].price}}</strong>
                        <img src="../assets/storedetail_img/down.png" class="down_shop" v-show="value.is_essential" @click="downFn(value,item.foods)">
                        <span class="count" v-show="value.is_essential"> {{value.is_featured}} </span>
                        <img class="add_shop" src="../assets/storedetail_img/add_shop.png" @click="addFn(value,item.foods)">
                      </div>
                    </figcaption>
                  </figure>
                </div>
            </div>
          </div>
        </div>
        <footer>
          <div class="footer">
            <div class="img_car" :class="{active_car:countNum > 0}">
              <img src="../assets/storedetail_img/shopcart.png" v-show="countNum == 0">
              <img src="../assets/storedetail_img/shopcar.png" v-show="countNum > 0">
              <span class="countNum" v-show="countNum > 0"> {{ countNum }} </span>
            </div>
            <strong> {{countPri}} </strong>
            <span v-show="countPri <= 20">
              ¥20元起送
            </span>
            <span class="goPay" v-show="countPri > 20" @click="checkout(headerlist)">
              去结算
            </span>
          </div>
        </footer>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        shopsurl:this.$route.query.url.content,
        firstheaderurl:this.$route.query.url.header,
        shoplist:[],
        headerlist:{},
        activity:'',
        desc:'',
        activity:false,
        currName:'',
    };
  },
  created(){      
      this.axios.get(this.shopsurl).then(res=>{
          //console.log(this.shopsurl);
          this.shoplist = res.data;         
      },err=>{        
          console.log(err);
      });
      this.axios.get(this.firstheaderurl).then(res=>{
          this.activity = res.data.activities[1].description;
          this.desc = res.data.piecewise_agent_fee.tips;
          //console.log(res.data.activities[1].description);
          this.headerlist = res.data;
      },err=>{
          console.log(err);
      });
  },
  methods:{
    backFn(){
       this.$router.push('/takeout');
    },
    activeFn(list,item,index){
        for(var n of list){
            if(n == item){
                n.is_selected = true;
            }else{
                n.is_selected = false;
            }
        }
        var target = document.querySelectorAll('.typelist header')[index].offsetTop-document.querySelector('.content').offsetTop;
        var scroll = document.querySelector('.content .right').scrollTop;
        $('.content .right').animate({
            scrollTop:target
        },500);
    },
    addFn(value,itemlist){
        value.is_essential = true;
        value.is_featured++;
        this.$store.dispatch('add',value);
    },
    downFn(value,itemlist){
        value.is_featured--;
        if(value.is_featured == 0){
          value.is_essential = false;
        }
        this.$store.dispatch('down',value);
    },
    checkout(headerlist){
      this.$router.push({
        path:'/checkout',
      });
      this.$store.dispatch('checkout',headerlist);
    }
  },
  computed:{
    countNum(){
      return this.$store.getters.countNum;
    },
    countPri(){
      return this.$store.getters.countPri;
    }
  }
}
</script>
    
<style lang="css" scoped>
    .header{
      width: 100%;
      height: 4rem;
      overflow: hidden;
      position: relative;
    }
    .blur_img{
      width: 100%;
      height: 4rem;
      overflow: hidden;
      filter: blur(50px);
    }
    .blur_img img{
      width: 100%;
    }
    .bg_color{
      width: 100%;
      height: 4rem;
      background-color: rgba(119,103,137,.43);
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
    }
    .callback{
      position: absolute;
        top: 0;
        z-index: 3;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
    }
    .callback img{
      width: 0.6rem;
      height: 0.6rem;
      vertical-align: middle;
      margin-left: 0.3rem;
    }
    .header figure{
      z-index: 3;
      width: 80%;
      padding: 0.4rem;
      position: absolute;
      top: 1rem;
    }
    .header figcaption{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        width: 7.2rem;
        position: absolute;
        left: 2.4rem;
        color: #fff;
        font-weight: 100;
    }
    .header figure img{
      float: left;
      margin-right: 0.3rem;
      width: 1.8rem;
    }
    .header figcaption h3{
      margin: 0;
        font-size: .466667rem;
        line-height: 1.2em;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
    }
    .header figcaption .desc{
      width: 100%;
        white-space: nowrap;
        height: .666667rem;
        line-height: .666667rem;
        font-size: .293333rem;
        display: inline-block;
    }
    .header figcaption .mess{
      height: .533333rem;
        line-height: .533333rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
    }
    .activity{
      position: absolute;
        top: 3.4rem;
        left: 0.4rem;
        color: #fff;
        z-index: 3;
        font-weight: 100;
        font-size: 0.28rem;
    }
    .activity:before{
      content: '减';
        width: 0.4rem;
        height: 0.4rem;
        background-color: rgb(240, 115, 115);
        display: inline-block;
        text-align: center;
        margin-right: 0.1rem;
    }
    nav{
      width: 100%;
        height: 1.2rem;
        border-bottom: 1px solid #ddd;
        line-height: 1.2rem;
        display: flex;
        justify-content: space-around;
    }
    nav a{
      height: 95%;
      font-size:.373333rem;
      color: #666;
    }
    nav a.active{
      color: #3190e8;
      font-weight: 700;
      border-bottom: 7px solid #3190e8;
    }
    .content{
      width: 100%;
      height: 15rem;
      background: #fff;
      margin-bottom: 1.2rem;
    }
    .content .leftList{
      width: 25%;
      float: left;
    }
    .content ul{
      width: 25%;
      display: inline;
    }
    .content ul li{
      height: 1.5rem;
      text-align: center;
      line-height: 1.5rem;
      font-weight: bold;
      border-bottom: 1px solid #ededed;
        font-size: .346667rem;
        color: #666;
        background: #f8f8f8;
    }
    .content .active{
      background: #fff;
      border-left: 5px solid #3190e8;
    }
    .content .right{
        width: 75%;
        float: right;
        height: 15rem;
        overflow: hidden;
        overflow-y: scroll;
    }
    .content .leftList li a,.content .right .typelist a{
        width: 100%;
        height: 100%;
        display: inline-block;
    }
    .content .right header{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #f8f8f8;
        text-indent: 0.3rem;
        float: left;
    }
    .content .right header h3{
      font-weight: 400;
      float: left;
      color: #666;
    }
    .content .right header span{
      color: #999;
        font-size: 0.25rem;
        line-height: 1.1rem;
        margin-left: 0.1rem;
    }
    .content .right .list{
      padding-top: 1rem;
    }
    .content .right figure{
      height: 3.5rem;
      padding: .65rem .4rem;
      border-bottom: 1px solid #ededed;
    }
    .content .right figure img.shop_img{
      float: left;
      width:2.2rem;
    }
    .content .right figcaption{
        width: 60%;
        float: right;
        font-style: normal;
    }
    .content .right figcaption h3,.content .right figcaption i,.content .right figcaption span{
        width: 100%;
        display: inline-block;
    }
    .content .right figcaption h3{
        font-size: .4rem;
        font-weight: 500;
        line-height: 1.1;
    }
    .content .right figcaption i{
      font-style: normal;
      font-size: .253333rem;
      color: #999;
      height: 0.4rem;
      line-height: .4rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: .1rem;
    }
    .content .right figcaption span{
        color: #666;
        font-size: .293333rem;
        line-height: .6rem;
    }
    .content .right figcaption .newPri{
        font-weight: 700;
        font-size: .426667rem;
        line-height: 1rem;
        color: #f60;
        width: 40%;
        display: flex;
        float: left;
    }
    .content .right figcaption .newPri:before{
      font-weight: 400;
        content: "\A5";
        font-size: .32rem;
        margin-right: .053333rem;
        display: inline-block;
    }
    .content figcaption .oldPri{
      font-size: .32rem;
        color: #666;
        font-weight: 400;
        text-decoration: line-through;
    }
    .content .add_shop{
      width: 0.6rem;
      height: .6rem;
      vertical-align: middle;
      margin-right: -0.2rem;
      float: right;
      margin-top: .2rem;
    }
    .content .right span.count{
      width: 24%;
      text-align: center;
      height: 100%;
      vertical-align: middle;
      margin-top: .2rem;
      font-size: 0.45rem;
      font-weight: 300;
    }
    .content .down_shop{
      width: .57rem;
      height: .57rem;
      vertical-align: middle;
      margin-left: .3rem;
      margin-top: .23rem;
    }
    footer{
      width: 100%;
      height: 1.2rem;
      position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #333;
    }
    footer .footer{
      width: 100%;
      height: 1.2rem;
      line-height: 1.2rem;
      position: relative;
    }
    footer .img_car{
      width: 1.2rem;
      height: 1.2rem;
      line-height: 1rem;
      background: #1f1c1c;
      border: .1rem solid #565555;
      margin-left: .5rem;
      text-align: center;
      border-radius: 50%;
      position: absolute;
      top: -0.3rem;
    }
    footer .active_car{
      background:#0089dc;
    }
    footer .img_car img{
      vertical-align: middle;
    }
    footer .img_car .countNum{
      width: 0.6rem;
      height: 0.6rem;
      position: relative;
      top: -1.3rem;
      left: 0.4rem;
      vertical-align: middle;
      line-height: 0.6rem;
      border-radius: 50%;
      background: #f60;
      font-size: 0.37rem;
    }
    footer strong{
      color: #fff;
        font-size: 0.5rem;
        position: absolute;
        left: 2.5rem;
        font-weight: 200;
    }
    footer strong:before{
      font-weight: 400;
        content: "\A5";
        font-size: .45rem;
        margin-right: .053333rem;
      color: #fff;
      font-weight: 200;
    }
    footer span{
      width: 2.5rem;
        height: 1.2rem;
        background: #3c3b3b;
        display: inline-block;
        float: right;
        text-align: center;
        color: #fff;
        font-size: 0.35rem;
    }
    footer .goPay{
      background:#0089dc;
      color: #fff;
      font-size: 0.38rem;
      letter-spacing: 1px;
    }
</style>