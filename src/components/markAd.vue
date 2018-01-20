<template>
<div class="wrap">
	<div class="shop-content">
		<div class="shop-left"><img src="//img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1iYwSOXXXXXX6aXXXwu0bFXXX.png" alt=""></div>
		<div class="shop-right">
			<div class="top"><img src="//img.alicdn.com/tps/TB14DuKSXXXXXXUXpXXXXXXXXXX_180x180Q50s50.jpg_.webp" alt=""></div>
			<div class="bottom"><img src="//img.alicdn.com/tps/TB1GWDpKXXXXXb.XXXXSutbFXXX.jpg_180x180Q50s50.jpg_.webp" alt=""></div>
		</div>
	</div>
	<ul class="adlist">
		<li class="ad-item">
			<router-link to="/seller">
				<img src="//img.alicdn.com/bao/uploaded/bao/upload/TB1cMQDRXXXXXbRXXXXwu0bFXXX.png_270x270Q50s50.jpg_.webp">
				<div class="mark"></div>
				<div class="title">青柚自营</div>
			</router-link>	
		</li>
		
			<li class="ad-item">
				<router-link to="/buy">
					<img src="//img.alicdn.com/bao/uploaded/bao/upload/TB1cMQDRXXXXXbRXXXXwu0bFXXX.png_270x270Q50s50.jpg_.webp">
					<div class="mark"></div>
					<div class="title">求购专区</div>
				</router-link>
			</li>
			<li class="ad-item">
				<router-link to="/buy">
					<img src="//img.alicdn.com/bao/uploaded/bao/upload/TB1cMQDRXXXXXbRXXXXwu0bFXXX.png_270x270Q50s50.jpg_.webp">
					<div class="mark"></div>
					<div class="title">求购专区</div>
				</router-link>
			</li>
			<li class="ad-item">
				<router-link to="/buy">
					<img src="//img.alicdn.com/bao/uploaded/bao/upload/TB1cMQDRXXXXXbRXXXXwu0bFXXX.png_270x270Q50s50.jpg_.webp">
					<div class="mark"></div>
					<div class="title">求购专区</div>
				</router-link>
			</li>
			
	</ul>
</div>
</template>

<script>
export default {

  name: 'markAd',

  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
.wrap{
	width: 100%;
	height: 6rem;
	margin-top: .5rem;
	.shop-content{
		width: 100%;
		display: flex;
		overflow: hidden;
		justify-content: center;
		align-items: center;
		.shop-left{
			flex: 1;
			height: 150px;
			padding-right: 10px;
			img{
				width: 100%;
				height: 100%;
			}

		}
		.shop-right{
			flex: 1;
			height: 150px;
			.top{
				flex: 1;
				height: 75px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.bottom{
				flex: 1;
				height: 75px;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.adlist{
		width: 100%;
		display: flex;
		height: 100%;
		.ad-item{
			flex: 1;
			height: 100%;
			background: green;
			position: relative;
			margin: 5px 0px  5px 5px;
			img{
				width: 100%;
				height: 6rem;
			}
			.mark{
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				background: rgba(128,128,128,0.5);
				z-index: 2;
			}
			.title{
				position: absolute;
				top: 0;
				z-index: 999;
				height:100%;
				width: 100%;
				text-align: center;
				color: #ffffff;
				font-size: 1.2rem;
			    line-height: 6rem;
			}
		}
	}
}
</style>