<template>
    <div id="discovery">
      <header>
          <div class="return">
             
          </div>
          <h1>发现</h1>
      </header>
      <div class="parts">
          <a v-for="(item ,index) in tab" :key="item.id">
            <div class="parts_content"> 
                <p class="title" style="color: rgb(255, 151, 0);">{{item.title}}</p>                  
                <p class="tips">{{item.subtitle}}</p>
            </div>
            <img class="parts_icon" :src="item.main_pic_hash">
          </a>
      </div>
      <div class="pic">
          <img src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/">
      </div>
      <section v-for="(item,index) in list" :key="item.id">
          <div class="active_header">
              <span class="line left"></span>
              <img  class="active_icon" :src="item.restaurant.header_img">
              {{item.restaurant.header}}
              <span class="line right"></span>
          </div>
          <p class="active_sub_title">{{item.restaurant.header_content}}</p>
          <div class="active_body">
              <a class="discovery_food" v-for="value in item.foods" :key="value.id">
                  <img width="324" height="322" :src="value.image_url">
                  <div>
                     <p class="food_name ui_ellipsis">{{value.name}}</p> 
                     <div class="food_info">
                         <span class="price">
                             <span class="yuan"></span>
                             {{value.price}}
                         </span>
                         <del class="original_price ui_ellipsis">￥{{value.original_price}}</del>
                     </div>
                  </div>
                  <span class="discount" style="display:none"></span>
              </a>
               <!-- <a class="discovery_food">
                  <img width="324" height="322" src="https://fuss10.elemecdn.com/7/56/5cc3592bbe098a4fa27e2487c1a6fjpeg.jpeg?imageMogr/format/webp/">
                  <div>
                     <p class="food_name ui_ellipsis">烤牛肉拌饭</p> 
                     <div class="food_info">
                         <span class="price">
                             <span class="yuan">￥</span>
                             33
                         </span>
                         <del class="original_price ui_ellipsis">￥35</del>
                     </div>
                  </div>
                  <span class="discount" style="display:none"></span>
              </a>
               <a class="discovery_food">
                  <img width="324" height="322" src="https://fuss10.elemecdn.com/7/56/5cc3592bbe098a4fa27e2487c1a6fjpeg.jpeg?imageMogr/format/webp/">
                  <div>
                     <p class="food_name ui_ellipsis">烤牛肉拌饭</p> 
                     <div class="food_info">
                         <span class="price">
                             <span class="yuan">￥</span>
                             33
                         </span>
                         <del class="original_price ui_ellipsis">￥35</del>
                     </div>
                  </div>
                  <span class="discount" style="display:none"></span>
              </a> -->
          </div>
          <p class="active_more" @click="more">
              查看更多
              <img class="more_next" src="../assets/discovery_img/right.png">
          </p>
      </section>
       <!-- <section>
          <div class="active_header">
              <span class="line left"></span>
              <img  class="active_icon" src="../assets/discovery_img/good.png">
              美食热推
              <span class="line right"></span>
          </div>
          <p class="active_sub_title">你的口味，我都懂得</p>
          <div class="active_body">
              <a class="discovery_food">
                  <img width="324" height="322" src="https://fuss10.elemecdn.com/7/56/5cc3592bbe098a4fa27e2487c1a6fjpeg.jpeg?imageMogr/format/webp/">
                  <div>
                     <p class="food_name ui_ellipsis">烤牛肉拌饭</p> 
                     <div class="food_info">
                         <span class="price">
                             <span class="yuan">￥</span>
                             33
                         </span>
                         <del class="original_price ui_ellipsis">￥35</del>
                     </div>
                  </div>
                  <span class="discount" style="display:none"></span>
              </a>
               <a class="discovery_food">
                  <img width="324" height="322" src="https://fuss10.elemecdn.com/7/56/5cc3592bbe098a4fa27e2487c1a6fjpeg.jpeg?imageMogr/format/webp/">
                  <div>
                     <p class="food_name ui_ellipsis">烤牛肉拌饭</p> 
                     <div class="food_info">
                         <span class="price">
                             <span class="yuan">￥</span>
                             33
                         </span>
                         <del class="original_price ui_ellipsis">￥35</del>
                     </div>
                  </div>
                  <span class="discount" style="display:none"></span>
              </a>
               <a class="discovery_food">
                  <img width="324" height="322" src="https://fuss10.elemecdn.com/7/56/5cc3592bbe098a4fa27e2487c1a6fjpeg.jpeg?imageMogr/format/webp/">
                  <div>
                     <p class="food_name ui_ellipsis">烤牛肉拌饭</p> 
                     <div class="food_info">
                         <span class="price">
                             <span class="yuan">￥</span>
                             33
                         </span>
                         <del class="original_price ui_ellipsis">￥35</del>
                     </div>
                  </div>
                  <span class="discount" style="display:none"></span>
              </a>
          </div>
          <p class="active_more">
              查看更多
              <img class="more_next" src="../assets/discovery_img/right.png">
          </p>
      </section>
         <section>
          <div class="active_header">
              <span class="line left"></span>
              <img  class="active_icon" src="../assets/discovery_img/good.png">
              美食热推
              <span class="line right"></span>
          </div>
          <p class="active_sub_title">你的口味，我都懂得</p>
          <div class="active_body">
              <a class="discovery_food">
                  <img width="324" height="322" src="https://fuss10.elemecdn.com/7/56/5cc3592bbe098a4fa27e2487c1a6fjpeg.jpeg?imageMogr/format/webp/">
                  <div>
                     <p class="food_name ui_ellipsis">烤牛肉拌饭</p> 
                     <div class="food_info">
                         <span class="price">
                             <span class="yuan">￥</span>
                             33
                         </span>
                         <del class="original_price ui_ellipsis">￥35</del>
                     </div>
                  </div>
                  <span class="discount" style="display:none"></span>
              </a>
               <a class="discovery_food">
                  <img width="324" height="322" src="https://fuss10.elemecdn.com/7/56/5cc3592bbe098a4fa27e2487c1a6fjpeg.jpeg?imageMogr/format/webp/">
                  <div>
                     <p class="food_name ui_ellipsis">烤牛肉拌饭</p> 
                     <div class="food_info">
                         <span class="price">
                             <span class="yuan">￥</span>
                             33
                         </span>
                         <del class="original_price ui_ellipsis">￥35</del>
                     </div>
                  </div>
                  <span class="discount" style="display:none"></span>
              </a>
               <a class="discovery_food">
                  <img width="324" height="322" src="https://fuss10.elemecdn.com/7/56/5cc3592bbe098a4fa27e2487c1a6fjpeg.jpeg?imageMogr/format/webp/">
                  <div>
                     <p class="food_name ui_ellipsis">烤牛肉拌饭</p> 
                     <div class="food_info">
                         <span class="price">
                             <span class="yuan">￥</span>
                             33
                         </span>
                         <del class="original_price ui_ellipsis">￥35</del>
                     </div>
                  </div>
                  <span class="discount" style="display:none"></span>
              </a>
          </div>
          <p class="active_more">
              查看更多
              <img class="more_next" src="../assets/discovery_img/right.png">
          </p>
      </section> -->
    </div>
   
</template>
    
<script>
export default {
  name: "component_name",
  data () {
    return {
        url1:"../../static/json/discovery/tab.json",
        url2:"../../static/json/discovery/disfood.json",
        tab:[],
        list:[]
    };
  },
  methods:{
      more(){
          this.$router.push("/foodlike");
      }
  },
  created(){
      this.axios.get(this.url1).then(res => {
          this.tab = res.data[1];
          console.log(res.data[1]);
      },err=>{
          console.log(err)
      });
      this.axios.get(this.url2).then(res => {
          this.list = res.data;
          console.log(res.data);
      },err=>{
          console.log(err)
      })
  }
}
</script>
    
<style lang="css" scoped>
    #discovery{
        padding-bottom: 1.6rem;
    }
    header{
        height: 1.173333rem;
        position: fixed;
        top: 0;
        left: 0;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        display: flex;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: 100%;
        height: 1.173333rem;
        color: #fff;
        font-size: .48rem;
        background: #2395ff;
        z-index: 99;
    }
    .return {
        float: left;
        height: 1.173333rem;
        width: 1.173333rem;
        background:url(../assets/discovery_img/return.png)  no-repeat center center;
        background-size:50% 50%;
    }
    header h1{
        color:white;
        margin:0 auto;
        font-weight: 700;
        font-size: 1em;
        line-height: 1.173333rem;
        transform: translateX(-50%);
    }
    .parts{
        margin-top:1.173333rem;
        margin-bottom: .28rem;
        display: flex;
        background: #fff;
        flex-wrap: wrap;
    }
    .parts a{
        width: 50%;
        float: left;
        height: 2.133333rem;
        padding: 0 .4rem;
        border-bottom: 1px solid #ededed;
        position: relative;
    }
    .parts a:nth-child(odd) {
        border-right: 1px solid #ededed;
    }
    .parts_content{
        max-width: 3rem;
        transform: translateY(-50%);
        position: absolute;
        top: 50%;
        display: inline-block;
    }
    .title{
        line-height: 1.2;
        font-size: .426667rem;
        margin-bottom: .16rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .tips{
        line-height: 1.2;
    font-size: .32rem;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
    }
    .parts_icon{
        width: 1.2rem;
        transform: translateY(-50%);
        position: absolute;
        top: 50%;
        right: 0.4rem;
    }
    .pic{
        border-top: 1px solid #ededed;
        box-sizing: border-box;
        overflow: hidden;
        margin-bottom: .28rem;
    }
    .pic img{
        width: 100%;
    }
   section{
       margin-bottom: .28rem;
        background: #fff;
        border-top: 1px solid #eee;
        border-bottom: .013333rem solid #eee;
   }
   .active_header {
        padding-top: .52rem;
        text-align: center;
        font-size: .48rem;
        font-weight: 700;
        color: #333;
    }
   .line {
    display: inline-block;
    margin: .213333rem .093333rem .173333rem;
    border: 1px solid #333;
    width: .4rem;
    height: 0;
    position: relative;
}
.line.left:after {
    right: -.066667rem;
}
.line.right:after {
    left: -.066667rem;
}
.line:after {
    position: absolute;
    top: -.066667rem;
    content: "";
    background: #333;
    height: .133333rem;
    width: .133333rem;
    border-radius: 50%;
}
.active_icon {
    position: relative;
    top: .053333rem;
    width: .44rem;
    height: .44rem;
}
.active_sub_title{
    font-size: .293333rem;
    color: #999;
    text-align: center;
    padding-bottom: .213333rem;
}
.active_body{
    padding: .32rem 0 .4rem .4rem;
    white-space: nowrap;
}
.discovery_food{
    display: inline-block;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 2.96rem;
    margin-right: .16rem;
} 
.discovery_food img {
    width: 4.32rem;
    height: 2.933333rem;
    margin-bottom: .253333rem;
    max-width: 100%;
}  
.ui_ellipsis{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.discovery_food .food_name {
    font-size: .346667rem;
    color: #333;
    margin-bottom: .133333rem;
}
.discovery_food .price {
    font-size: .346667rem;
    height: .48rem;
    line-height: .48rem;
    color: #ff5339;
    margin-right: .093333rem;
    max-width: 1.333333rem;
    display: inline-block;
    vertical-align: middle;
}
.discovery_food .price .yuan {
    font-size: .293333rem;
}

.original_price{
    font-size: .293333rem;
    color: #aaa;
    max-width: 1.066667rem;
    display: inline-block;
    vertical-align: middle;
}
.discovery_food .discount {
    position: absolute;
    top: 0;
    left: 0;
    font-size: .293333rem;
    color: #fff;
    background: #413d3c;
    padding: .066667rem;
}
.active_more{
    font-size: .346667rem;
    color: #999;
    text-align: center;
    padding: .4rem 0 .48rem;
}
.more_next{
    height: .24rem;
    width: .133333rem;
    margin-left: .146667rem;
}





</style>