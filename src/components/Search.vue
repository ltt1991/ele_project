<template>
   <div id="search">
        <div class="search">
            <section  class="app-3rd0G">
                <div class="img_left" @click="backFn">
                    <img class="left" src="../assets/search_img/left.png">
                </div>
                <form class="app-ks58x">
                    <div class="img_search">
                        <img src="../assets/search_img/search.png" class="app-ETjEK">
                    </div>
                    
                    <input type="search" autofocus="autofocus" placeholder="请输入商品名称" class="app-2jUwX">
                    <button type="submit" class="app-1SphX">搜索</button>
                </form>
            </section>
        </div>
        <section>
            <header class="app-1E06o">
                <span>历史搜索</span>
            </header>
            <section class="app-1lQKU">
                <span class="app-1vu8i">薯条</span>
                <span class="app-1vu8i">鸭脖</span>
                <span class="app-1vu8i">脆皮鸡饭</span>
            </section>
        </section>
        <section class="app-LSwvR">
            <header class="app-1E06o">热门搜索</header>
            <section class="app-1lQKU">
                <span class="app-1vu8i" v-for="(item ,index) in hotsearchlist" :key="item.id"> {{ item.search_word }} </span>
            </section>
        </section>
    </div>
    
</template>
  
<script>
export default {
    name: "component_name",
    data () {
        return {
             hotsearchurl:'../static/json/takeout/hotsearch.json',
             hotsearchlist:[], 
        };
    },
    created(){
        //使用axios
        this.axios.get(this.hotsearchurl).then(res=>{
            //console.log(res.data);
            this.hotsearchlist = res.data;
        },err=>{
            console.log(err);
        });
    },
    methods:{
        backFn(){
            this.$router.go(-1);
        }
    }
}
</script>
   
<style lang="css" scoped>
        #search{
            background: #fff;
        }
       .app-3rd0G {
		    width: 100%;
		    height: 1.2rem;
		    line-height: 1.5rem;
		}
		.img_left{
			width: 10%;
			height: 1.2rem;
			line-height: 1.2rem;
			float: left;
		}
		.app-3rd0G .left{
			width: 0.5rem;
			height: 0.5rem;
			vertical-align: middle;
		}
		.app-ks58x{
		    width: 90%;
		    height: 1.2rem;
		    float: left;
		    line-height: 1.2rem;
		    position: relative;
		}
		.img_search{
			height: 100%;
		    width: 5%;
		    float: left;
		    position: absolute;
		    left: 0.4rem;
    		top: 10%;
		}
		.img_search .app-ETjEK{
			width: 0.4rem;
    		height: 0.4rem;
		}
		.app-ks58x c,.app-ks58x input,.app-ks58x .app-1SphX{
			float: left;
		}
		.app-ks58x input{
			width: 80%;
		    height: 0.8rem;
		    background: #f8f8f8;
		    border: none;
		    outline: none;
		    margin-top: 0.2rem;
		    text-indent: 1rem;
		    font-size: 0.25rem;
		    line-height: 1rem;
		    font-size: 0.34rem;
            color: #ccc;
		}
		.app-ks58x input::-webkit-input-placeholder{
			color: #ccc;
			font-weight: 200;
		}
		.app-1SphX{
			color: #000;
		    font-size: 0.44rem;
		    height: 1.2rem;
		    margin-left: 0.2rem;
		}
		.app-1E06o {
		    -webkit-box-pack: justify;
		    -webkit-justify-content: space-between;
		    -ms-flex-pack: justify;
		    justify-content: space-between;
		    font-size: .426667rem;
		    padding: .2rem .333333rem;
		    color: #666;
		    font-weight: 700;
		}
		.app-1E06o, .app-32xpD {
		    display: -webkit-box;
		    display: -webkit-flex;
		    display: -ms-flexbox;
		    display: flex;
		}
		.app-1lQKU {
		    padding: 0 .333333rem .333333rem;
		}
		.app-1vu8i {
		    display: inline-block;
		    border-radius: .066667rem;
		    padding: .2rem .266667rem;
		    font-size: .373333rem;
		    margin-right: .333333rem;
		    margin-top: .333333rem;
		    color: #666;
		    background-color: #f7f7f7;
		}
		.app-LSwvR {
		    margin-top: .4rem;
		}
</style>
