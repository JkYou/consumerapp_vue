<template>
<div class="wrap"  @click="add">
	<p class="top-title">品牌精选</p>
	<div class="shop-content">
		<div class="shop-left"><a href="https://s.click.taobao.com/t?e=m%3D2%26s%3DeXgR%2F%2BotmKocQipKwQzePDAVflQIoZepK7Vc7tFgwiFRAdhuF14FMbC8x2pSp4H%2B8sviUM61dt3BwPqyOKArDP9AYRsAKUXmGQeXQo3aQ40ygDoAqfMYoJRCcGz72LMHDJbuZDCrHt4%3D"><img src="//img.alicdn.com/bao/uploaded///img.taobaocdn.com/tps/TB1iYwSOXXXXXX6aXXXwu0bFXXX.png" alt=""></a></div>
		<div class="shop-right">
			<div class="top"><a href="https://s.click.taobao.com/t?e=m%3D2%26s%3DxugDKTe%2BxPgcQipKwQzePDAVflQIoZepK7Vc7tFgwiFRAdhuF14FMbhEyY52R3phJ1gyddu7kN%2FBwPqyOKArDP9AYRsAKUXmGQeXQo3aQ40ygDoAqfMYoD5LMzoYMHwuOYQwrhPE0iw%3D"><img src="../assets/liang.jpg" alt=""></a></div>
			<div class="bottom"><a href="https://s.click.taobao.com/t?e=m%3D2%26s%3D2CQTF6gvQ3ocQipKwQzePDAVflQIoZepK7Vc7tFgwiFRAdhuF14FMWg%2BDNzbGyEW79%2FTFaMDK6TBwPqyOKArDP9AYRsAKUXmGQeXQo3aQ40ygDoAqfMYoI6tmYNREXrBOYQwrhPE0iw%3D"><img src="../assets/three.jpg" alt=""></a></div>
		</div>
	</div>
	<!-- <p class="top-title">热门分区</p>
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
	</ul> -->
	<p class="top-title">精选好货</p>
</div>
</template>

<script>
import Bus from '@/components/base/bus.js'
export default {

  name: 'markAd',
  props: {
     msg: {
      type: String
     }
   },

  data () {
    return {
    	count:1019
    };
  },
  created(){
  	console.log(this.msg);
  },
  methods:{
  	add(){
  		// 触发组件A中的事件
  		this.count++;
       this.$emit('changeData', this.count);

       Bus.$emit('msg', this.count)

  	}
  }
};
</script>

<style lang="less" scoped>
.wrap{
	width: 100%;
	height: 6rem;
	margin-top: .5rem;
	.top-title{
	    // border-top: 1px solid #ddd;
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
	.shop-content{
		width: 100%;
		margin-top: 5px;
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