<template>
	<div id="root">
		<mt-swipe :auto="9000" class="swipe">
			<mt-swipe-item v-for="data in dataArr.imgArr">
				<img :src="data" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<div class="actvity"><img :src=actiImg alt=""></div>
		<div class="detailInfo">
			<p class="detail">{{dataArr.detail}}</p>
			<p class="price">¥<span class="money">{{dataArr.price}}</span></p>
			<div class="adressInfo"><span class="mail">快递：{{dataArr.mail}}</span>
			<span class="total">月销量：{{dataArr.total}}</span>
			<span class="adress">{{dataArr.adress}}</span></div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'goodsDetail',

  data () {
    return {
    	dataArr:{imgArr:["http://img.alicdn.com/imgextra/i3/693060164/TB1FSLRbtfJ8KJjy0FeXXXKEXXa_!!0-item_pic.jpg_640x640Q50s50.jpg","http://img.alicdn.com/imgextra/i2/693060164/TB257bAex3IL1JjSZPfXXcrUVXa_!!693060164.jpg_760x760Q50s50.jpg_.webp","http://img.alicdn.com/imgextra/i1/693060164/TB22EwbcBUSMeJjSszeXXcKgpXa_!!693060164.jpg_760x760Q50s50.jpg_.webp","http://img.alicdn.com/imgextra/i1/693060164/TB2xJ8ccfNZWeJjSZFpXXXjBFXa_!!693060164.jpg_760x760Q50s50.jpg_.webp"],
    	detail:"HLA/海澜之家微弹圆领毛衫2017冬季新品舒适长袖毛衫男",price:"268",mail:'0.00',total:'4567',adress:'江苏南京' },
    	actiImg:'http://img.alicdn.com//L1/279/1/tmc-0.86681201595793791509892896285-1125x144.png'
    }
  }
}
</script>

<style lang="less" scoped>
#root{
	width: 100%;
	.swipe{
		width: 100%;
		height: 375px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.actvity{
		width: 100%;
		height: 50px;
		margin-top: -5px;
		overflow: hidden;
		z-index: 2;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.detailInfo{
		margin-top: 5px;
		padding:1px 1px;
		width: 100%;
		overflow: hidden;
		.detail{
		    font-size: 14px;
		    color: #051B28;
		    padding: 0 10px;
		    line-height: 20px;
		    display: -webkit-box;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
		    -webkit-box-pack: center;
		    height: 42px;
		    overflow: hidden;
		    word-break: break-all;
		}
		.price{
			font-family: arial;
		    font-style: normal;
		    font-size: 18px;
		    position: relative;
		    padding-left: 10px;
		    color:#FF0036;
		    top: 2px;
		    .money{
		    	font-size: 24px;
			    position: relative;
			    top: 2px;
			    margin-right: 5px;
		    }
		}
		.adressInfo{
			    display: -webkit-box;
			    display: flex;
			    background-color: #FFF;
			    line-height: 30px;
			    padding: 0 10px;
			    font-size: 12px;
			    color: #999;
			    font-weight: lighter;
			    span{
			    	-webkit-box-flex: 1;
				    -webkit-flex: 1;
				    flex: 1;
				    text-align: center;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
			    }
			    span:first-child{
			    	text-align: left;
			    }
			    span:last-child{
			    	text-align: right;
			    }

		}

	}
}

</style>