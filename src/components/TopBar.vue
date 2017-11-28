<template>
	<div class="wrapper" ref="wrapper">
	  <ul class="content"> 
	  	<li>滚动</li>
	  	<li>滚动</li>
	  	<li>滚动</li>
	  	<li>滚动</li>
	  	<li>滚动</li>
	  	<li>滚动</li>
	  	<li>xiha</li>
	  </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  name: 'TopBar',

  data () {
    return {

    }
  },
  mounted(){
	this.$nextTick(() => {
		this.scroll=new BScroll(this.$refs.wrapper,{
			//api参数
			click:true,
			scrollX: true,
            eventPassthrough: 'vertical'
		})
	})
}

}
</script>

<style lang="less" scoped>
.wrapper{
	height: 40px;
	margin: 0 auto;
	z-index: 2;
	background: #ed424b;
	overflow-x: hidden;/**/
	.content{
		height:40px;
		width: 450px;
		overflow-x: hidden;
		color: #ffffff;
		li{
			display: block;
			float: left;
			height:40px;
			width: 50px;
			margin: 0 2px;
			padding: 2px;
			font: 14px/40px a;
			&:active{
				background: #ed424b;
			}
		}
	}
}
</style>