<template>
<div class="wrap">
	<ul class="adlist">
		<li class="ad-item">
			<router-link to="/seller">
				<img src="./fugu.png">
				<div class="mark"></div>
				<div class="title">青柚自营</div>
			</router-link>	
		</li>
		
			<li class="ad-item">
				<router-link to="/buy">
					<img src="./fugu.png">
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
	.adlist{
		width: 100%;
		display: flex;
		height: 100%;
		.ad-item{
			flex: 1;
			height: 100%;
			background: green;
			position: relative;
			&:last-child{
				margin-left: .5rem;
			}
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