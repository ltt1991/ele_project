<template>
    <div id="addaddress">
        <header class="addaddress">
            <div class="address_left" @click="backFn">
                <img src="../assets/takeout_img/add_left.jpg">
            </div>
            <h1 class="ElemeHeader-center_2hbxfGq_0">添加地址</h1>
        </header>
        <div data-v-d9b7a926="" class="content">
            <div data-v-d9b7a926="" class="formbloack username">
                <div data-v-d9b7a926="" class="label-wrap">联系人</div>
                <div data-v-d9b7a926="" class="input-group-wrap">
                    <div data-v-d9b7a926="" class="input-wrap">
                        <input data-v-d9b7a926="" placeholder="你的姓名" maxlength="20">
                    </div>
                    <div data-v-d9b7a926="" class="input-wrap bottom spans">
                        <span data-v-d9b7a926="" class="form-span">先生</span>
                        <span data-v-d9b7a926="" class="form-span">女士</span>
                    </div>
                </div>
            </div>
            <div data-v-d9b7a926="" class="formbloack phone">
                <div data-v-d9b7a926="" class="label-wrap">电话</div>
                <div data-v-d9b7a926="" class="input-group-wrap rightbtn">
                    <div data-v-d9b7a926="" class="input-wrap">
                        <input data-v-d9b7a926="" placeholder="你的手机号" type="tel" >
                        <img data-v-d9b7a926="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAHRJREFUSA1jZCAT8E59/R+m9XO2KCOMTQrNRIpiaqsdtZzaIUqUeaPBTlQwUVvRaLBTO0SJMm802IkKJmorYkSunahtOCHzRm6ck9UIAAUncnSNNiYIJTB0+ZGb4EZ9jp4W6MIfDXa6BDO6JaPBjh4idOEDAOTZCsiDM8JjAAAAAElFTkSuQmCC" class="inputicon-right">
                    </div>
                </div>
            </div>
            <div data-v-d9b7a926="" class="formbloack address">
                <div data-v-d9b7a926="" class="label-wrap">地址</div>
                <div data-v-d9b7a926="" class="input-group-wrap">
                    <div data-v-d9b7a926="" class="input-wrap top">
                        <input data-v-d9b7a926="" placeholder="小区/写字楼/学校等" readonly="readonly">
                    </div>
                    <div data-v-d9b7a926="" class="input-wrap bottom">
                        <textarea data-v-d9b7a926="" rows="2" placeholder="详细地址 (如门牌号等)" maxlength="100"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div data-v-d9b7a926="" class="form-button-wrap">
            <button data-v-d9b7a926="" class="form-button">确定</button>
        </div>
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
			}
		}
	}
</script>
   
<style lang="css" scoped>
	#addaddress{
		background:#fff;
	}
	.addaddress{
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
	.content[data-v-d9b7a926] {
	    padding-left: .4rem;
	    background: #fff;
		margin-top: 1.2rem;
	}
	.formbloack[data-v-d9b7a926]:first-child {
	    border-top: .026667rem solid #eee;
	}
	.formbloack[data-v-d9b7a926] {
	    background-color: #fff;
	    border-bottom: 1px solid #eee;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	}
	.formbloack .label-wrap[data-v-d9b7a926] {
	    -webkit-flex-basis: 1.733333rem;
	    -ms-flex-preferred-size: 1.733333rem;
	    flex-basis: 1.733333rem;
	    padding: .426667rem 0 .373333rem;
	    font-size: .4rem;
	    line-height: .48rem;
	    color: #333;
	    font-weight: 700;
	}
	.formbloack .input-group-wrap[data-v-d9b7a926] {
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	}
	.formbloack .input-wrap[data-v-d9b7a926] {
	    -webkit-box-flex: 1;
	    -webkit-flex: 1 1 0;
	    -ms-flex: 1 1 0;
	    flex: 1 1 0;
	    padding: .373333rem 0;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	}
	.formbloack .input-wrap.bottom[data-v-d9b7a926] {
	    border-top: 1px solid #eee;
	}
	.formbloack .spans[data-v-d9b7a926] {
	    padding: .266667rem 0;
	}
	.formbloack input[data-v-d9b7a926], .formbloack textarea[data-v-d9b7a926] {
	    outline: none;
	    font-size: .4rem;
	    line-height: .48rem;
	    color: #666;
	    border: none;
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    padding-right: .4rem;
	    padding-left: 0;
	    -webkit-tap-highlight-color: transparent;
	}
	.formbloack input::-webkit-input-placeholder{
		color: #ccc;
		font-weight: 200;
	}
	.formbloack .inputicon-right[data-v-d9b7a926] {
	    height: .4rem;
	    margin-left: .226667rem;
	    margin-right: .4rem;
	    -webkit-touch-callout: none;
	}
	.formbloack[data-v-d9b7a926] {
	    background-color: #fff;
	    border-bottom: 1px solid #eee;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	}
	.formbloack .form-span[data-v-d9b7a926] {
	    background: #fff;
	    border: 1px solid #ddd;
	    border-radius: .106667rem;
	    font-size: .373333rem;
	    color: #666;
	    line-height: .746667rem;
	    width: 1.813333rem;
	    margin-right: .266667rem;
	    text-align: center;
	    -webkit-tap-highlight-color: transparent;
	}
	textarea {
	    resize: none;
	    font-weight: 200;
	}
	textarea::-webkit-input-placeholder{
		color: #ccc;
	}
	.form-button-wrap[data-v-d9b7a926] {
	    padding: .533333rem .4rem;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	}
	.form-button-wrap .form-button[data-v-d9b7a926] {
	    background: #00d762;
	    text-align: center;
	    border-radius: .053333rem;
	    -webkit-box-flex: 1;
	    -webkit-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    font-size: .48rem;
	    line-height: .506667rem;
	    color: #fff;
	    padding: .333333rem 0;
	    border: none;
	    font-weight: 700;
	    outline: none;
	}
</style>