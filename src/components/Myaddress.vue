<template>
    <div>
        <header class="myaddress">
          <div class="address_left" @click="backFn">
            <img src="../assets/takeout_img/add_left.jpg">
          </div>
          <h1 class="ElemeHeader-center_2hbxfGq_0">我的地址</h1>
        </header>
        <div class="addressList">
          <figure>
              <img @click="editaddress" src="../assets/takeout_img/edit.png">
              <figcaption>
                <h3>李珍华</h3><span class="sex">女士 </span><span class="phone">18001286439</span>
                <address>蓝天嘉园龙域中街东门6号楼三单元3051</address>
              </figcaption>
          </figure>
        </div>
        <footer @click="addaddress">
          <img src="../assets/takeout_img/add 2.png">
          <span>新增收货地址</span>
        </footer>
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
      backFn(){
        this.$router.go(-1);
      },
      editaddress(){
        this.$router.push('/editaddress');
      },
      addaddress(){
        this.$router.push('/addaddress');
      }
    }
  }
</script>
    
<style lang="css" scoped>
    header{
        width: 100%;
        height: 1.2rem;
        position: fixed;
        top: 0;
        left: 0;
        background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
        background-image: -webkit-linear-gradient(left,#0af,#0085ff);
        background-image: linear-gradient(90deg,#0af,#0085ff);
    }
    .address_left{
        position: relative;
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
        width: 12%;
        height: 1.2rem;
    }
    .address_left img{
      width: 0.5rem;
        height: 0.5rem;
        vertical-align: middle;
        margin-left: 0.3rem;
    }
    .ElemeHeader-center_2hbxfGq_0 {
        position: absolute;
        top: 0;
        left: 50%;
        height: 1.2rem;
        max-width: 50%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        font-size: 0.48rem;
        line-height: 1.2rem;
        transform: translateX(-50%);
        color: #fff;
    }
    .addressList{
      width: 100%;
      margin-top: 1.2rem;
      font-weight: 200;
    }
    .addressList figure{
      width:100%;
      height: 2rem;
      background: #fff;
      padding: 0.3rem;
      border-bottom: 1px solid #ddd;
    }
    .addressList figure img{
      float: right;
        width: 0.6rem;	
      }
    .addressList h3{
      font-size: 0.5rem;
        float: left;
    }
    .addressList span.sex{
      font-size: 0.5rem;
        color: #666;
        margin-left: 0.25rem;
    }
    .addressList span.phone{
      font-size: 0.45rem;
        color: #666;
        margin-left: 0.25rem;
    }
    .addressList address{
      font-size: 0.38rem;
        font-style: normal;
        margin-top: 0.2rem;
    }
    footer{
      width: 100%;
        height: 1.5rem;
        background: #fff;
        border-top: 1px solid #ddd;
        position: fixed;
        bottom: 0;
        left: 0;
        line-height: 1.5rem;
        text-align: center;
        font-weight: 200;
    }
    footer img{
      width: 0.7rem;
        height: 0.7rem;
        vertical-align: middle;
    }
    footer span{
      font-size: 0.44rem;
        color: #3190e8;
        vertical-align: middle;
    }
</style>