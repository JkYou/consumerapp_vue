<template>
	<div id="root">
		<p class="emp1">Jk祝您新年快乐,万事如意！</p>
		<p class="emp">程序员哥哥正在熬夜加班开发中...</p>
	<tabbar></tabbar></div>
	
</template>

<script>
import tabbar from '@/components/Tabbar'
export default {

  name: 'juhuasuan',

  data () {
    return {

    }
  },
   components:{
       tabbar,
        },
}
</script>

<style lang="less" scoped>
#root{
		width: 100%;
		height: 100%;
		background-image: url(../assets/happy.jpg);
		background-size:cover;
		background-repeat: no-repeat;
		position: absolute;
		top: 0px;
		bottom: 0px;
		.emp1{
			width: 100%;
			position: absolute;
		    color: #ffffff;
		    text-align: center;
		    top: 200px;
		    font-size: 30px;
		    text-shadow: 1px 1px 5px #ffffff;

		}
	.emp{
		width: 100%;
		position: absolute;
	    color: #ffffff;
	    font-size: 15px;
	    text-align: center;
	    bottom: 180px;
}
}

</style>