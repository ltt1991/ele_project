<template>
    <div id="discovery">
       <mt-header class="head" title="发现">
            <router-link to="/" slot="left">
                <mt-button class="button" icon="back"></mt-button>
            </router-link>
        </mt-header>
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
     .head{
        height: 1.173333rem;
    }
    .button{
        width: 1.173333rem;
        height: 1.173333rem;
    } 
</style>