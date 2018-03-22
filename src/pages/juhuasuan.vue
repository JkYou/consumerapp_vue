<template>
<div class="root" >
	<!-- <markad :msg='msg' @changeData="get"></markad> -->
	<!-- <scroll> -->
	<ul class="wrap">
		<li class="item">
			<div class="imgwrap"><img src="" alt=""></div>
			<p class="title"></p>
		</li>
	</ul>
	<!-- </scroll>	 -->
	<tabber></tabber>
</div>
</template>

<script  type="text/ecmascript-6">
import markad from '@/components/markAd'
import scroll from '@/components/base/scroll'
import tabber from '@/components/Tabbar'
export default {

  name: 'juhuasuan',

  data () {
    return {
    	msg:"yjkstring",
    	msgParent:''
    }
  },
  methods:{
  	get(msg){
        this.msgParent = msg 
        console.log(this.msgParent);
    }
  },

   components: {
   	// TopBar,
   	markad,
	   scroll,
	   tabber
    }
}
</script>

<style lang="less" scoped>
.root{
	width: 100%;
	box-sizing: content-box;
	.wrap{
		width: 100%;
		height: auto;
		font-size: 0px;
		.item{
			width: 1.066667rem;
			height: 1.333333rem;
			box-shadow: 0 0 3px #C0C0C0;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
}

</style>
