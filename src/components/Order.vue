<template>
    <!-- <div id="order">
       <h1>订单页面</h1>
    </div> -->
    <div id="checkout">
        <header>
            <div class="return">                
            </div>
            <h1>确认订单</h1>
        </header>
        <section class="cart_addr checkout_section">
            <div class="addr_item">
                <h2 class="addr_name">
                    <b>李</b><span>女士</span><span>15940294189</span>
                </h2>
                <p class="addr_detail">
                    
                南河沿北京市东城区王府井大街西侧,天安门东地铁往北
    
                </p>
                <img src="../assets/discovery_img/rig.png">
            </div>
        </section>
        <section class="delivery checkout_section">
            <div class="delivery_left">
                <img src="../assets/discovery_img/time.png">
                <span>送达时间</span>
            </div>
            <div class="delivery_right">
                <span>尽快送达 | 预计14:24</span>
            </div>
        </section>
        <section class="checkout_section">
            <section>
                <div class="cart_item"><b>支付方式</b><span>在线支付<img src="../assets/discovery_img/rig.png"></span></div>
            </section>
            <div class="cart_item disabled">
                <b>红包</b>
                <span>暂时只在饿了么 APP 中支持<img src="../assets/discovery_img/rig.png"></span>
            </div>
        </section>
        <section class="cart_group checkout_section">
            <h3 class="shopinfo">
                <img src="https://fuss10.elemecdn.com/7/89/cb1b8e2d301b9d0875efab07f5e1cjpeg.jpeg?imageMogr/format/webp/thumbnail/38x/https://fuss10.elemecdn.com/7/89/cb1b8e2d301b9d0875efab07f5e1cjpeg.jpeg?imageMogr/format/webp/thumbnail/38x/">
                <span>爱鲜蜂(南河沿大街店)</span>
            </h3>
            <ul class="foodlist">
                <li>
                    <div class="cellname">
                        <p class="foodname">京红水蜜桃 (大果)450-550g 2粒/盒</p>
                    </div>
                    <span class="quantity">x&nbsp;1</span>
                    <span class="total">¥7.8</span>
                </li>
                 <li>
                    <div class="cellname">
                        <p class="foodname">京红水蜜桃 (大果)450-550g 2粒/盒</p>
                    </div>
                    <span class="quantity">x&nbsp;1</span>
                    <span class="total">¥7.8</span>
                </li>
                 <li>
                    <div class="cellname">
                        <p class="foodname">京红水蜜桃 (大果)450-550g 2粒/盒</p>
                    </div>
                    <span class="quantity">x&nbsp;1</span>
                    <span class="total">¥7.8</span>
                </li> <li>
                    <div class="cellname">
                        <p class="foodname">京红水蜜桃 (大果)450-550g 2粒/盒</p>
                    </div>
                    <span class="quantity">x&nbsp;1</span>
                    <span class="total">¥7.8</span>
                </li>
            </ul>
            <div class="alltotal">
                <span>订单 ¥46.4</span>
                <span>待支付 ¥46.4</span>
            </div>
        </section>
        <section class="checkout_section">
            <div class="cart_item">
                <b>订单备注</b>
                <span class="item_rig">
                    <span>口味、偏好等</span>
                    <img src="../assets/discovery_img/rig.png">
                </span>
            </div>
            <div class="cart_item disabled">
                <b style="color: #333;">发票信息</b>
                <span class="item_rig">
                    <span>不需要开发票</span>
                    <img src="../assets/discovery_img/rig.png">
                </span>
            </div>
        </section>
        <footer>
            <span>待支付 ¥60</span>
            <small>
            ｜优惠 ¥20
            </small>
            <button class="submitbtn">确认下单</button>
        </footer>
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
    #checkout{
        /* margin-top:1.173333rem; */
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
    .checkout_section {
        background: #fff;
        border-top: 1px solid #eee;
        border-bottom: .013333rem solid #eee;
    }
    .cart_addr{
        background:  #fff url(../assets/discovery_img/bg.png) repeat-x 0 100%;
        min-height: 2rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .checkout_section:not(:last-child){
        margin-bottom: .266667rem;
    }
    .checkout_section:first-of-type {
         margin-top:1.173333rem;
        border-top: 0;
    }
    .addr_item{
        -webkit-box-flex: 0;
        -webkit-flex: 0 100%;
        -ms-flex: 0 100%;
        flex: 0 100%;
        padding: 0 .613333rem 0 1.133333rem;
        margin-bottom: .066667rem;
        position: relative;
        background: url(../assets/discovery_img/pos.png) no-repeat .4rem;
        background-size: .55rem;
    }
    .cart_addr .addr_name{
        font-size: .426667rem;
    }
    .addr_detail{
        margin-top: .213333rem;
        font-size: .346667rem;
    }
    .addr_name span{
        padding: 0 .213333rem 0 .08rem;
    }
    .addr_item img{
        position: absolute;
        right: .346667rem;
        top: 50%;
        width: .4rem;
        height: .4rem;
        transform: translateY(-50%);
    }
    .delivery_left img{
        width: .5rem;
        height: .5rem;
    }
    .delivery_left{
        width: 2.44rem;
        font-size: .426667rem;
        font-weight: 700;
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
    .delivery{
        margin-left: 0;
    padding: .266667rem .4rem;
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
    .delivery_right{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: right;
        color: #3190e8;
    }
    .delivery_right>span{
        font-size: .346667rem;
    }
    
    .cart_item {
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
        padding: .373333rem;
        font-size: .4rem;
        color: #333;
    }
    .cart_item span{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        color: #999;
        font-size: .346667rem;
        max-width: 6.933333rem;
    }
    .cart_item span img{
        margin-left: .133333rem;
        width: .32rem;
        height: .32rem;
        fill: #b7b7b7;
    }
    .cart_item:not(:first-child) {
        border-top: .013333rem solid #d8d8d8;
    }
    .disabled, .disabled a,.disabled span{
        color: #bbb;
    }
    .shopinfo{
         display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 1.173333rem;
        padding: 0 .4rem;
        border-bottom: 1px solid #eee;
        font-size: .373333rem; 
    }
    .shopinfo img{
        margin-right: .133333rem;
        width: .506667rem;
        height: .506667rem;
        vertical-align: middle;
            max-width: 100%;
    }
    .foodlist{
        border-bottom: .013333rem solid #eee;
        padding: .266667rem .4rem;
        font-size: .346667rem;
        color: #333;
    }
    .foodlist li{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        font-size: .373333rem;
        color: inherit;
        padding: .2rem 0;
    }
    .cellname{
        verflow: hidden;
        -webkit-box-flex: 9;
        -webkit-flex: 9;
        -ms-flex: 9;
        flex: 9;
    }
    .foodname{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .quantity{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: right;
    }
    .total{
        -webkit-box-flex: 2;
        -webkit-flex: 2;
        -ms-flex: 2;
        flex: 2;
        text-align: right;
    }
    .alltotal{
        padding: .266667rem .4rem;
        font-size: .346667rem;
        color: #333;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        font-weight: 700;
    }
     .item_rig{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        color: #999;
        font-size: .346667rem;
        max-width: 6.933333rem; 
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
     } 
     footer{
             height: 1.173333rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #3c3c3c;
     }
     footer span{
         color: #fff;
        font-size: .48rem;
        line-height: 1.173333rem;
        padding-left: .266667rem;
     }
     footer small{
         color: #999;
        font-size: .32rem;
     }
     footer .submitbtn {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        background: #00d762;
        min-width: 2.8rem;
        padding: 0 .133333rem;
        border: none;
        color: #fff;
        font-size: .453333rem;
        outline: 0;
        border: none;
        font-size: inherit;
        font-family: inherit;
}
    
</style>