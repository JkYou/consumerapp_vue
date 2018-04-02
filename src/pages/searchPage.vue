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

  <scroll class="wrapper-search" :pullup="pullup" @pullup="more">
      <div class="content-search">
        <div class="hotwordPanel">
          <div class="hotHea"><span>热门搜索</span></div>
          <div class="s-mi-hq" v-for="item in hotword" @click="search(item)"><span class="s-mi-cont-key">{{item}}</span></div>
        </div>
        <div id="root" :style="{'-webkit-overflow-scrolling': scrollMode}">
          <ul>
            <li  v-for="item in pageList">
              <a :href="item.item_url">
                <div class="good-item">
                  <div class="item-left"><img v-lazy="item.pict_url" alt=""></div>
                  <div class="item-right">
                    <p class="detail">{{item.title}}</p><span style="color:	#A9A9A9; display:inline-block; margin-top:10px; margin-left:5px;">{{item.shop_title}}</span>
                    <div class="coupon"><span class="price">￥{{item.zk_final_price}}</span>
                      <a :href="item.coupon_click_url"><div class="cou-text">{{item.coupon_info}}</div></a></div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
</div>

</template>

<script>
import {Toast} from 'mint-ui'
import store from 'vuex';
import scroll from '@/components/base/scroll'
 import Util from '@/util/util.js'
export default {

  name: 'search',
  data () {
		return {
			keyword: '',
			items: '',
			result: true,
			key: '',
      pullup:true,
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
    scroll
    },
    mounted(){
      this.loadPageList(1);  //初次访问查询列表
    },
	methods: {
		search (keyword) {
			this.$store.commit("SET_KEYWORD",keyword);
			// this.keyword=keyword
			//  this.loadPageList(1);
      this.pageList=[];
			console.log(this.$store.state.keyword);
			 this.loadPageList(1);
		},
    loadPageList:function (page){
        // 查询数据
          let param = new URLSearchParams();
          param.append("pageNo", page);
          param.append("q", this.$store.state.keyword);
          param.append("pageSize", 20);
          let oldKeyword=this.keyword;
           this.axios.post('/getCouponProductList',param).then((response) => {
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
	}
};
</script>

<style lang="less" scoped>
.wrap {
	/*width: 100%;*/
	background-color: #F3F3F3;
  .head {
    background-color: #FF1845;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 1.2rem;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    z-index: 33;
    .back {
      width: 0.533333rem;
      height: 0.533333rem;
      padding-left: 0.4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .searchbox {
      flex: 1;
      margin:0 0.933333rem;
      input {
        height: 0.8rem;
        width: 100%;
        border: none;
        font-size: 16px;
        padding-left: 1rem;
        background-image: url('../assets/search.png');
        background-repeat: no-repeat;
        background-size: 0.8rem 0.8rem;
        box-sizing: border-box;
        background-position: 0.3rem 50%;
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
        font-size: 16px;
        line-height: 1.2;
      }
    }
  }
  .hotwordPanel{
    padding-top: 8px;

    min-height: 50px;
    overflow: hidden;
    border: 0;
    color: #999;
    .hotHea{
      font-size: 12px;
      float: left;
      line-height: 16px;
      margin-left: 5px;
    }
    .s-mi-hq{
      float: left;
      border: 1px solid #FF1845;
      margin-right: 10px;
      margin-top: 20px;
      padding: 1px 5px;
      border-radius: 5px;
      color: inherit;
      .s-mi-cont-key{
        color: #FF1845;
      }
    }
  }
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
  .wrapper-search{
    margin-top: 1.2rem;
    width: 100%;
    height: 700px;
  }
}
</style>
