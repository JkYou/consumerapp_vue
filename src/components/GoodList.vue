<template>
	<div id="root" :style="{'-webkit-overflow-scrolling': scrollMode}">
     <topbar></topbar>
		 <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">  
			<ul>
				<li  v-for="item in pageList">
					<a :href="item.item_url">
						<div class="good-item">
							<div class="item-left"><img v-lazy="item.pict_url" alt=""></div>
							<div class="item-right">
								<p class="detail">{{item.title}}</p>{{item.shop_title}}</span></p>
								<div class="coupon"><span class="price">￥{{item.zk_final_price}}</span>
									<a :href="item.coupon_click_url"><div class="cou-text">{{item.coupon_info}}</div></a></div>
							</div>
						</div>
				    </a>
				</li>
			</ul>
		</v-loadmore>
	</div>
</template>

<script>
import {Loadmore} from 'mint-ui';
import topbar from '@/components/Topbar'
 export default { 
    name :"GoodList",
    data:function() {  
      return {  
        searchCondition:{  //分页属性  
          pageNo:"1",  
          pageSize:"10"  
        },  
        pageList:[],  
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了  
        scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动  
      }  
    },  
    components: {  
      'v-loadmore':Loadmore,  // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题  
                              // 推荐应用组件时用a-b形式起名  
      topbar
    },  
    mounted(){  
      this.loadPageList(1);  //初次访问查询列表  
      window.addEventListener('scroll',function(){
          console.log('test');
         })
    },  
    methods: {  
    	listenerScroll(){
    		debugger
        let scroll=document.body.scrollTop;
        // this.scrolled=scroll >100? true:false;
        console.log(scroll)
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
          console.log(page);
          let param = new URLSearchParams();
				param.append("pageNo", page);
				param.append("q", "韩版女装");
				param.append("pageSize", 20);
           this.axios.post('/getCouponProductList',param).then((response) => { 
              // 是否还有下一页，加个方法判断，没有下一页要禁止上拉  
		          this.isHaveMore(true);  
		            this.pageList = this.pageList.concat(response.data); 
		          this.$nextTick(function () {  
		            // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，  
		            // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，  
		            // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好  
		            this.scrollMode = "touch";  
		          });
          })
          .catch(function (error) {
          	console.log(error)

          })   
      },  
      more:function (){  
          // 分页查询  
        this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;  
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
  }  
</script>

<style lang="less" scoped>
#root{
	margin-top: 130px;
	width: 100%;
	over-flow: auto;     /* winphone8和android4+ */
    -webkit-overflow-scrolling: touch;    /* ios5+ */
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
			margin-right: 8px;
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
</style>