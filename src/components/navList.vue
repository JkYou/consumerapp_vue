<template>
	<div class="nav-wrap">
		<p class="top-title">热门专区</p>
		<ul class="li-wrap">
			<li class="item">
				<div class="itemwrap">
					<div class="img-wrap"><img src="https://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png" alt=""></div>
       			    <p>男装</p>
				</div>
		    </li>
		    <li class="item">
				<div class="itemwrap">
					<div class="img-wrap"><img src="https://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png" alt=""></div>
       			   <p class="title">男装</p>
				</div>
		    </li>
		    <li class="item">
				<div class="itemwrap">
					<div class="img-wrap"><img src="https://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png" alt=""></div>
       			    <p class="title">男装</p>
				</div>
		    </li>
		    <li class="item">
				<div class="itemwrap">
					<div class="img-wrap"><img src="https://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png" alt=""></div>
       			   <p class="title">男装</p>
				</div>
		    </li>
		    <li class="item">
				<div class="itemwrap">
					<div class="img-wrap"><img src="https://gw.alicdn.com/tps/i2/TB19BluIVXXXXX6XpXXN4ls0XXX-183-129.png" alt=""></div>
       			    <p class="title">男装</p>
				</div>
		    </li>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'navList',

  data () {
    return {
    	listArr:[{imgSrc:"",title:""}]
    }
  }
}
</script>

<style lang="less" scoped>
.nav-wrap{
	width: 100%;
	overflow: hidden;
	margin: 5px 0;
	.top-title{
	    border-bottom: 1px solid #ddd;
	    border-left: 7px solid #ff5000;
	    color: #353535;
	    font-size: 16px;
	    line-height: 30px;
	    height: 30px;
	    padding-left: 10px;
	    position: relative;
	    background: #fff;
	    margin: 5px auto;
	}
	.li-wrap{
		display: flex;
		width: 100%;
		.item{
			flex: 1;
			padding-left: 5px;
			.itemwrap{
				width: 60px;
				height: 80px;
				display: inline-block;
                box-sizing: border-box;  
                text-align: center;
                .img-wrap{
                	width: 60px;
                	height: 50px;
                	 text-align: center;
                	overflow: hidden;
                	margin: 0 auto;
                	img{
                		height: 100%;
                		width: 100%;
                	}
                }
                p{
                	height: 15px;
                	margin-top: 6px;
                	font: 14px/20px a;
                	color: #808080;
                }              
			}
		}

	}
}
</style>