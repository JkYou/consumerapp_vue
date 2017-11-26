<template>
	<div class="root"  @click="carTap()">
		<i class="icon iconfont icon-gouwuche font-jk"></i>
	</div>
</template>

<script>
export default {

  name: 'car',

  data () {
    return {
    	totl:"1"

    }
  },
 methods:{
 	carTap :function(){
 		this.totl++;
 	}
 }
}
</script>

<style lang="less" scoped>
.root{
	height: 50px;
	width: 50px;
	border-radius: 50%;
	color: #808080;
	position: fixed;
	text-align: center;
	z-index: 999;
	right: 20px;
	bottom: 30px;
	.font-jk{
		font-size: 30px;
	}
}
</style>