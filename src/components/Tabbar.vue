<template>
    
       <!-- 底部菜单 -->
   <div class="tabbar">
       <span style="display:none;">{{ flag2 }}</span>
       <div v-for="(item,index) in list" :key="item.id" @click.stop="activeFn(list,item)">
            <router-link :to="item.linkurl"  > 
                <div>
                    <img :src=" item.flag ? item.active : item.noselect">
                </div>
                <span :class="{active:item.flag}">{{item.value}}</span>
            </router-link>
       </div>
   </div>

</template>
    
<script>
export default {
    name: "component_name",
    data () {
        return {
            list:[
                {'linkurl':'/takeout','value':'外卖','noselect':'../static/footer_img/eleme.png','active':'../static/footer_img/footer_logo.png',flag:true},
                {'linkurl':'/discovery','value':'发现','noselect':'../static/footer_img/find.png','active':'../static/footer_img/search_active.png',flag:false},
                {'linkurl':'/order','value':'订单','noselect':'../static/footer_img/order.png','active':'../static/footer_img/order_active.png',flag:false},
                {'linkurl':'/mine','value':'我的','noselect':'../static/footer_img/mine.png','active':'../static/footer_img/mine_active.png',flag:false}
            ]
        }
    },
    mounted(){
    },
    methods:{
        activeFn(list,item){
            console.log(111);
            for(var value of list){
                if(value == item ){
                    item.flag = true;
                }else{
                    value.flag = false;
                }
            }
            // if(item.value == "我的"){
            //     console.log(this.$store.state.flag)               
            //     if(!this.$store.state.flag){
            //         item.linkurl = "/mine"
            //         console.log(item);
            //     }else{
            //         item.linkurl = "/mine_enter"
            //     }
            // }
        }
    },
    computed:{
        flag(){
            return this.$store.state.flag
        },
        flag2(){
            // console.log(this.$store.state.flag)
            if(this.$store.state.flag){
                this.list[3].linkurl = "/mine_enter"
            }
            return ""
        }
    }
}
</script>
    
<style lang="css" scoped>
    #app .tabbar{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 1.6rem;
    background: #fff;
    border-top: 2px solid #f5f5f5;
    padding-top: 0.3rem;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;  
}
.tabbar a{
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  width: 25%;
  text-align: center;
}
#app .tabbar a img {
    width: 0.55rem;
    height: 0.55rem;
}
#app .tabbar a span{
    color: #666;
    font-size: 0.26667rem;
}
#app .tabbar .active{
    color: #0089dc;
}
</style>
