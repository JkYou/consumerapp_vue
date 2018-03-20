<template>
<div class="root" >
	<markad :msg='msg' @changeData="get"></markad>
	<scroll>
		<ul class="wrap">
		<li class="item">
			
		</li>
	</ul>
	</scroll>	
	<topbar></topbar>
</div>
</template>

<script  type="text/ecmascript-6">
import markad from '@/components/markAd'
import topbar from '@/components/TopBar'
import scroll from '@/components/base/scroll'
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
   	topbar,
   	markad,
   	scroll
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
			width: 100%;
			height: 6.0rem;
			margin: 0.5rem 0.15rem 0rem 0.15rem;
			padding: 0.0rem 0.15rem;
			box-shadow: 1px 1px 1px #FF1845;
			background: red;
		}
	}
}

</style>
