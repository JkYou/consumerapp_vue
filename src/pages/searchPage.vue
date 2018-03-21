<template>
<div class="wrap">
		<div class="head">
			<div class="searchbox">
				<input type="search" autofocus @keypress.enter="search(keyword)" v-model="keyword" placeholder="尽情搜索">
			</div>
			<div class="searchbtn">
				<button class="search" @click="search(keyword)">搜索</button>
			</div>
		</div>
		<div class="hotwordPanel">
			<div class="hotHea"><span>热门搜索</span></div>
			<div class="s-mi-hq" v-for="item in hotword" @click="search(item)"><span class="s-mi-cont-key">{{item}}</span></div>
		</div>
		<div id="root" :style="{'-webkit-overflow-scrolling': scrollMode}">
			 <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
				<ul>
					<li  v-for="item in pageList">
						<a :href="item.item_url">
							<div class="good-item">
								<div class="item-left"><img v-lazy="item.pict_url" alt=""></div>
								<div class="item-right">
									<p class="detail">{{item.title}}</p>{{item.shop_title}}</span></p>
									<div class="coupon"><span class="price">￥{{item.zk_final_price}}</span><a :href="item.coupon_click_url"><div class="cou-text">{{item.coupon_info}}</div></a></div>
								</div>
							</div>
					    </a>
					</li>
				</ul>
			</v-loadmore>
	    </div>
	
</div>

</template>

<script>
import {Toast} from 'mint-ui'
import {Loadmore} from 'mint-ui'
  import store from 'vuex';
export default {

  name: 'search',
  data () {
		return {
			keyword: '',
			items: '',
			result: true,
			key: '',
			hotword:["日用","男装","女装","零食","办公","电脑"],
			searchCondition:{  //分页属性  
	          pageNo:"1",  
	          pageSize:"10"  
	        },
	        ismore:false,  
	        pageList:[],  
	        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了  
	        scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动  
			}
	},
	components: {  
      'v-loadmore':Loadmore, // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题  
                              // 推荐应用组件时用a-b形式起名 
    }, 
    mounted(){  
      // this.loadPageList(1);  //初次访问查询列表  
    },
	methods: {
		handleScroll () {
		    console.log("scroll");
		  },
		search (keyword) {
			this.$store.commit("SET_KEYWORD",keyword);
			// this.keyword=keyword
			 this.loadPageList(1); 
			console.log(this.$store.state.keyword);
			 this.loadPageList(1); 
			
			  

		},
		loadTop:function() { //组件提供的下拉触发方法  
	        //下拉加载  
	        this.loadPageList(1);  
	        this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位  
	      },  
	      loadBottom:function() {  
	        // 上拉加载  
	        this.more();// 上拉触发的分页查询  
	        this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位  
	      },  
	      loadPageList:function (page){  
	          // 查询数据 
	            let param = new URLSearchParams();
				param.append("pageNo", page);
				param.append("q", this.$store.state.keyword);
				param.append("pageSize", 20);
				let oldKeyword=this.keyword;
				console.log(oldKeyword);
		           this.axios.post('/getCouponProductList',param).then((response) => { 
		              // 是否还有下一页，加个方法判断，没有下一页要禁止上拉  
				          this.isHaveMore(true);  
					          if(this.ismore){
					          	this.pageList = this.pageList.concat(response.data); 
					          }else{
					          	this.pageList=[];
					          	this.pageList =response.data; 
					          }
				             
				          this.$nextTick(function () {  
				            // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，  
				            // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，  
				            // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好  
				            this.scrollMode = "touch";  
				          });
				          // }
		          })
		          .catch(function (error) {
		          	console.log(error)

		          }) 
	      },  
	      more:function (){  
	          // 分页查询  
	        this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
	        this.ismore=true;  
			this.loadPageList(this.searchCondition.pageNo);
	      },  
	      isHaveMore:function(isHaveMore){  
		        // 是否还有下一页，如果没有就禁止上拉刷新  
		        this.allLoaded = true; //true是禁止上拉加载  
		        if(isHaveMore){  
		          this.allLoaded = false;  
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
	#root{
	// margin-top: 265px;
	width: 100%;
	overflow: hidden;
	.good-item{
		display: flex;
		width: 100%;
		height: 100px;
		padding:5px 10px;
		// background: red;
		.item-left{
			flex: 0 0 100px;
			background:rgba(0,0,0,.3);
			img{
				width: 100%;
				height: 100%;
			}
		}
		.item-right{
			padding-top: 5px;
			margin-left: 5px;
			flex: 1;
			width: 100%;
			border-bottom: 1px solid #eee;
			.detail{
				font-size: 14px;
				color: #333;
				word-break: normal;
			}
			.total{
			    font-size: 12px;
			    line-height: 12px;
			    color: #999;
			    margin-top: 9px;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    overflow: hidden;
			    .origin{
			    	margin-left: 15px;
			    }
			}
			.coupon{
			    font-size: 16px;
			    line-height: 16px;
			    font-weight: 700;
			    color: #DD2727;
			    margin-top: 9px;
			    margin-right: 25px;
			    .price{
			    	font-size: 14px;
				    line-height: 20px;
				    font-weight: 600;
				    vertical-align: bottom;
			    }
			    .cou-text{
			    	display: inline-block;
			    	float: right;
			    	width: 80px;
			    	height: 30px;
			    	font-weight: normal;
			    	background: #DD2727;
			    	line-height: 30px;
			    	text-align: center;
			    	font-size: 12px;
				    color: #fff;
				    margin-left: 9px;
				    border-radius: 5px;
			    }
				
			}

		}
	}
}
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
