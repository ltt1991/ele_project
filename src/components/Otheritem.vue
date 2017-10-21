<template>
    <div>
        <div v-for="(item,index) in itemlist" :key="item.id">
            <section class="tab_list_item" v-if="item.style==2">
                <div class="food_item" v-for="(item1,index1) in item.foods" :key="item1.id">
                        <img :src="item1.image_hash">
                        <h4>{{item1.name}}</h4>
                        <div class="food_restaurant">{{item1.restaurant_name}}</div>
                        <div class="food_price">
                            <div>
                                <i>￥</i>
                            {{item1.price}} 
                            </div>
                        
                        </div>
                </div>
            </section>
            <section class="tab_list_shopitem" v-if="item.style==3">
                <div class="shopitem_left">
                    <img :src="item.restaurant.image_path">
                </div>
               <div class="shopitem_right">
                   <header>
                        <h3>{{item.restaurant.name}}</h3>
                         <ul>
                            <li v-for="(item3,index3) in item.restaurant.supports" :key="item3.id" v-if="item3.id==7||item3.id==4">{{item3.icon_name}}</li>
                            
                        </ul>
                    </header>
                     <section class="shopitem_star">
                        <div class="shopitem_star_left">
                            <div class="star">
                                <img src="../assets/discovery_img/star.png" v-for="num in Math.floor(item.restaurant.rating)" :key="num.id">
                                    <!-- <img src="../assets/discovery_img/star.png">
                                    <img src="../assets/discovery_img/star.png">
                                    <img src="../assets/discovery_img/star.png">
                                    <img src="../assets/discovery_img/star.png">
                                        <img src="../assets/discovery_img/star.png"> -->
                            </div>
                            <span class="shop_item_score"> {{ item.restaurant.rating }}</span>
                            <span> 月售{{item.restaurant.recent_order_num}}单 </span>
                        </div>
                        <ul>
                            <li v-for="(item3,index3) in item.restaurant.supports" v-if="item3.id==9" :key="item3.id">准时达</li>
                            <li>{{item.restaurant.delivery_mode.text}}</li>
                        </ul>
                    </section>
                    <section class="deliver_price">
                        <ul class="deliver_price_left">
                            <li>¥{{item.restaurant.float_minimum_order_amount}}起送</li>
                            <li>{{item.restaurant.piecewise_agent_fee.description}}</li>
                        </ul>
                        <ul class="deliver_price_right">
                            <li>{{item.restaurant.distance}}m</li>
                            <li>{{item.restaurant.order_lead_time}}分钟</li>
                        </ul>
                    </section>
                    <footer>
                        <section class="youhui">
                            <div v-for="(item2,index2) in item.restaurant.activities" v-show="flag==true?index2<2:1">
                                <div class="band">{{item2.icon_name}}</div>
                                <div class="band_content">
                                    {{item2.description}}
                                </div>
                            </div>
                            <div class="activity_num" @click="shou">
                                {{item.restaurant.activities.length}}个
                                <img v-if="flag" src="../assets/discovery_img/sanxia.png">
                                <img v-else="flag" src="../assets/discovery_img/sanshang.png">
                            </div>
                        </section>
                    </footer>
                </div>
            </section> 
        </div>       
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        url1:"",
        flag:true,
        itemlist:[]
        
    };
  },
  methods:{
      shou(){
          this.flag = !this.flag;
      }
  },
  beforeRouteUpdate(to, from, next){
      next()
       this.url1 = "../../static/json/discovery/otheritem"+this.$route.params.id+".json";
          this.axios.get(this.url1).then(res=> {
            this.itemlist = res.data;
            //   console.log(res.data);
            },err => {
                console.log(err)
            });
      
  },
  created(){
      console.log(this.$route.params.id);
      this.url1 = "../../static/json/discovery/otheritem"+this.$route.params.id+".json";
    this.axios.get(this.url1).then(res=> {
        this.itemlist = res.data;
    //   console.log(res.data);
    },err => {
        console.log(err)
    });
  }
   
}
</script>
    
<style lang="css" scoped>
    .tab_list_item{
        margin-bottom: .2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        border-bottom: 1px solid #f3f3f3;
        background: #fff;
    }
    .food_item{
        padding: .266667rem;
        width: 50%;
        height: 5.573333rem;
    }
    .food_item img{
        display: block;
        width: 4.466667rem;
        height: 3.066667rem;
        max-width: 100%;
    }
    .food_item h4{
        margin-top: .2rem;
        color: #333;
        font-size: .4rem;
        line-height: .533333rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        font-weight: 400;
    }
    .food_item .food_restaurant{
        color: #999;
        font-size: .293333rem;
        line-height: .426667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .food_item .food_price{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-top: .2rem;
    }
    .food_price>div{
        height: .533333rem;
        color: #ff5339;
        font-weight: 700;
        font-size: .48rem;
    }
    .food_price i{
        margin-right: .04rem;
        font-weight: 400;
        font-style: normal;
        font-size: .293333rem;
    }
    .tab_list_shopitem{
        margin-bottom: .2rem;
        padding: .4rem .266667rem;
        background: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
    .shopitem_left{
        display: block;
        width: 1.733333rem;
        height: 1.733333rem;
        position: relative;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    }
    .shopitem_left img{
         display: block;
        width: 1.733333rem;
        height: 1.733333rem;
        max-width: 100%;
    }  
    .shopitem_right{
        /* display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox; */
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
        margin-left: .266667rem;
    }
    .shopitem_right header h3{
        overflow: hidden;      
        text-overflow: ellipsis;
        white-space: nowrap;
        height: .56rem;
        color: #333;
        font-weight: 700;
        font-size: .426667rem;
        line-height: .56rem;
        display: inline-block;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin:0;
    }
    .shopitem_right header ul{       
        float: right;
    }
    header ul li{           
        margin-left: .08rem;
        width: .32rem;
        height: .32rem;
        border: 1px solid #ddd;
        border-radius: .053333rem;
        color: #999;
        text-align: center;
        font-size: .266667rem;
        line-height: .293333rem;
    }
    .shopitem_star{
        margin: .16rem 0 .24rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .shopitem_star_left{
            height: .346667rem;
    color: #666;
    font-size: .293333rem;
    line-height: .346667rem;
    display: -webkit-box; 
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    }
    .star{
        position: relative;
        overflow: hidden;
    }
    .star img{
        
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 1em;
    -ms-flex: 0 0 1em;
    flex: 0 0 1em;
    margin: 0 1px;
    width: 1em;
    height: 1em;
    }
    .shop_item_score{
        margin: 0 .16rem 0 .106667rem;
        color: #ff5339;
    }
    .shopitem_star ul{
            display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
        -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    }
    .shopitem_star ul li:first-child{
        border-color: #44a5ff;
    background: #fff;
    color: #2395ff;
    padding: 0 .053333rem;
    height: .346667rem;
    border: 1px solid;
    border-radius: .053333rem;
    text-align: center;
    font-size: .266667rem;
    line-height: .32rem;
    }
    .shopitem_star ul li:last-child{
        margin-left: .106667rem;
    border-color: #2395ff;
    background: #2395ff;
    color: #fff;
    padding: 0 .053333rem;
    height: .346667rem;
    border: 1px solid;
    border-radius: .053333rem;
    text-align: center;
    font-size: .266667rem;
    line-height: .32rem;
    }
    .deliver_price{
        display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    }
    .deliver_price_left{
        color: #666;
    font-size: .293333rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
        -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    }
    .deliver_price_left li:last-child::before{
        margin: 0 .08rem;
        color: #ddd;
        content: "|";
    }
    .deliver_price_right{
        display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    }
    .deliver_price_right li:first-child{
            color: #999;
    font-size: .266667rem;
    }
    .deliver_price_right li:last-child{
            color: #2395ff;
        font-size: .266667rem;
    }
    .deliver_price_right li:last-child::before{
        margin: 0 .08rem;
    color: #ddd;
    content: "|";
    }
    .shopitem_right footer{
        margin-top: .213333rem;
    padding-top: .24rem;
    border-top: 1px dashed #e6e6e6;
    }
    footer .youhui{
        padding-right: 1.066667rem;
        position: relative;
    margin-bottom: -.066667rem;
    }
    footer .youhui>div{
        display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: .133333rem;
    height: .346667rem;
    }
    .band{
        background: rgb(240, 115, 115);
        -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: .173333rem;
    width: .346667rem;
    height: .346667rem;
    border-radius: .053333rem;
    color: #fff;
    text-align: center;
    font-size: .266667rem;
    line-height: .346667rem;
    }
    .band_content{
        overflow: hidden;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .293333rem;
    line-height: .346667rem;
    }
    .activity_num{
            position: absolute;
    top: 0;
    right: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-bottom: .32rem;
    width: 1.066667rem;
    height: .666667rem;
    color: #999;
    font-size: .266667rem;
    line-height: .346667rem;
    }
    .activity_num img{
        display: block;
        margin-left: .093333rem;
        width: .3rem;
        height: .3rem;
    }
    
</style>