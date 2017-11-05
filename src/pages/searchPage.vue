<template>
<div class="wrap">
		<div class="head">			
			<div class="searchbox">
				<input type="search" autofocus @keypress.enter="search(keywords)" v-model="keywords" placeholder="尽情搜索">
			</div>
			<div class="searchbtn">
				<button class="search" @click="search(keywords)">搜索</button>
			</div>
		</div>
		<div class="hotwordPanel">
			<div class="hotHea"><span>热门搜索</span></div>
			<div class="s-mi-hq" v-for="item in hotword"><span class="s-mi-cont-key">{{item}}</span></div>
		</div>
	</div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {

  name: 'search',

  data () {
		return {
			keywords: '',
			items: '',
			result: true,
			key: '',
			hotword:["iphoneX","毛巾","男外套","肯德基","全家桶","男外套","肯德基","全家桶"]
		}
	},
	methods: {
		search (keywords) {
			this.items = ''
			this.key = keywords
			if(this.key){
				Toast('没有对接');
				// this.axios.get('https://easy-mock.com/mock/593f72288ac26d795ff1e570/search/results')
				// .then((res) => {

				// }).catch((error) => {
				// 	console.log(error)
				// })	
			}else{
				Toast('请输入')
				return
			}
						
	}	
}
};
</script>

<style lang="less" scoped>
.wrap {
	width: 100%;
	height: 100vh;
	background-color: #F3F3F3;
	.head {
		background-color: #FF1845;
		width: 100%;
		height: 3.5rem;
		display: -webkit-flex;
		display: flex;
		align-items: center;
		.back {
			width: 2rem;
			height: 2rem;
			padding-left: .5rem;
			img {
				width: 100%;
				height: 100%;
		    }
	    }
	    .searchbox {
			flex: 1;
			margin:0 1rem;
			input {
				height: 2rem;
				width: 100%;
				border: none;
				font-size: 1rem;
				padding-left: 3rem;
				background-image: url('../assets/search.png');
				background-repeat: no-repeat;
				background-size: 2rem 2rem;
				box-sizing: border-box;
				background-position: .3rem 50%;
				outline: none ;
				border-radius: .4rem
			}
		}
		.searchbtn {
			margin-right: 1.4rem;
			.search {
				color:#ffffff;
				border: none;
				outline: none;
				background:#FF1845; 
				font-size: 1rem;
				line-height: 1.2;
			}
		}
    }
    .hotwordPanel{
    	padding: 8px;
	    min-height: 60px;
	    overflow: hidden;
	    border: 0;
	    color: #999;
	    .hotHea{
	    	font-size: 12px;
	    	float: left;
            line-height: 18px;
	    }
	    .s-mi-hq{
	    	float: left;
		    border: 1px solid #999;
		    margin-right: 10px;
		    margin-top: 20px;
		    padding: 1px 5px;
		    border-radius: 2px;
		    color: inherit;
		    .s-mi-cont-key{

		    }
	    }
    }
}
</style>