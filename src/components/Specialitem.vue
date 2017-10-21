<template>
    <div >
         <section class="list_item" v-for="(item,index) in restaurantlist" :key="item.id">
            <div class="list_item_head">
                <div class="hotFoodShop">
                    <img :src="item.restaurant.image_path">
                    <h3>{{item.restaurant.name}}</h3>
                </div>
                <span>¥{{item.restaurant.float_minimum_order_amount}}起送 / 配送费¥{{item.restaurant.float_delivery_fee}}</span>
            </div>
            <ul class="hotFoodItem">
                <li v-for="(value,index) in item.foods" :key="value.id">
                    <img :src="value.image_hash">
                    <div class="food_info">
                        <h4>{{value.name}}</h4>
                        <span>
                            <i>￥</i>
                            {{value.price}}
                        </span>
                        <div class="see">去看看</div>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
         url2:"../../static/json/discovery/morestaurant.json",
        restaurantlist:[]
    };
  },
  created(){
      this.axios.get(this.url2).then(res =>{
          this.restaurantlist = res.data;
          console.log(res.data);
      },err =>{
          console.log(err)
      });
  }
}
</script>
    
<style lang="css" scoped>
    
.list_item{
    margin-bottom: .2rem;
    margin: 0 auto;
    padding: 0 .24rem .333333rem;
    width: 9.733333rem;
    border-radius: .16rem;
    background: #fff;
    box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1);
}
.list_item_head{
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 1.146667rem;
}
.hotFoodShop{
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.hotFoodShop img{
    display: block;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    overflow: hidden;
    width: .56rem;
    height: .56rem;
    border-radius: 50%;
    max-width: 100%;
}
.hotFoodShop h3{
    overflow: hidden;
    margin-left: .24rem;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
    font-size: .373333rem;

}
.hotFoodItem img{
    display: block;
    width: 2.933333rem;
    height: 2.933333rem;
    max-width: 100%;
}
.list_item_head span{
    flex-shrink: 0;
    color: #999;
    font-size: .293333rem;
}
.list_item ul{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.list_item ul li:first-child{
     margin-left:0;
}
.list_item ul li{
    margin-left: .226667rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 2.933333rem;
}
.food_info{
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.food_info h4{
    display: -webkit-box;
    overflow: hidden;
    margin: .2rem 0 .08rem;
    max-height: .906667rem;
    color: #333;
    word-break: break-all;
    font-size: .346667rem;
    line-height: .453333rem;
    -webkit-line-clamp: 2;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
}
.food_info span{
    color: #ff5339;
    font-weight: 700;
    font-size: .32rem;
    line-height: .48rem;
}
.food_info span i{
    margin-right: .026667rem;
    font-weight: 400;
    font-style: normal;
    font-size: .24rem;
    line-height: .266667rem;
}
.see{
    margin: .186667rem auto 0;
    width: 2.666667rem;
    height: .746667rem;
    border: 1px solid #ff5339;
    border-radius: .08rem;
    color: #ff5339;
    text-align: center;
    font-size: .32rem;
    line-height: .72rem;
}
</style>