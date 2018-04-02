<template>
	<div id="root" :style="{'-webkit-overflow-scrolling': scrollMode}" >

    <scroll class="wrapper" :pullup="pullup" @pullup="more">
      <ul class="content">
        <TNav></TNav>
        <Tbanner></Tbanner>
        <topbar></topbar>
        <li  v-for="item in pageList">
          <a :href="item.item_url">
            <div class="good-item">
              <div class="item-left"><img v-lazy="item.pict_url" alt=""></div>
              <div class="item-right">
                <p class="detail">{{item.title}}</p><span style="color:	#A9A9A9; display:inline-block; margin-top:10px; margin-left:5px;">{{item.shop_title}}</span>
                <span class="couponinfo">{{item.coupon_info}}</span>
                  <div class="coupon">
                    <span class="price">￥{{item.zk_final_price}}</span>

                    <div class="cou-text">领券</div>
                  </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </scroll>
		 <!--<v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">-->

		<!--</v-loadmore>-->
	</div>
</template>

<script>
  import Tbanner from '@/components/banner'
  import TNav from '@/components/Theader'
  import scroll from '@/components/base/scroll'
  import topbar from '@/components/Topbar'
  import store from 'vuex'
  import Bus from '@/components/base/bus.js'
  import Util from '@/util/util.js'
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
        scrollMode:"auto" ,//移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        pullup:true
      }
    },
    components: {
      // 'v-loadmore':Loadmore,  // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题
        scroll,                      // 推荐应用组件时用a-b形式起名
      topbar,
      Tbanner,
      TNav
		},
		created(){
			this.$store.commit("SET_KEYWORD","韩版春装");
		},
    mounted(){
			Bus.$on('msg', (msg) => {
        //  this.message = msg
				 this.$store.commit("SET_KEYWORD", msg);
				 this.pageList=[];
				 this.loadPageList(1);  //初次访问查询列表
			})
      this.loadPageList(1);  //初次访问查询列表

    },
    methods: {
      loadTop:function() { //组件提供的下拉触发方法
        //下拉加载
        this.loadPageList(1);
      },
      loadBottom:function() {
        // 上拉加载
        this.more();// 上拉触发的分页查询
      },
      loadPageList:function (page){
          // 查询数据
          console.log(page);
          let param = new URLSearchParams();
				param.append("pageNo", page);
				param.append("q", this.$store.state.keyword);
				param.append("pageSize", 20);
           this.axios.post('/getCouponProductList',param).then((response) => {
              // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
		       //    this.isHaveMore(true);
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
      }
    }
  }
</script>

<style lang="less" scoped>
#root {
  width: 100%;
  .wrapper{
    width: 100%;
    height: 700px;
  .good-item {
    display: flex;
    width: 100%;
    height: 100px;
    padding: 5px 10px;
    // background: red;
    .item-left {
      flex: 0 0 100px;
      background: rgba(0, 0, 0, .3);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item-right {
      padding-top: 5px;
      margin-left: 5px;
      margin-right: 8px;
      flex: 1;
      width: 100%;
      border-bottom: 1px solid #eee;
      .detail {
        font-size: 14px;
        color: #333;
        display: inline-block;
        padding-right: 5px;
        margin-right: 5px;
      }
      .total {
        font-size: 12px;
        line-height: 12px;
        color: #999;
        margin-top: 9px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        .origin {
          margin-left: 15px;
        }
      }
      .couponinfo{
        display: inline-block;
        float: right;
        color: #ff5d62;
        padding-right: 50px;
        margin-top: 10px;
        font-size: 12px;
      }
      .coupon {
        font-size: 16px;
        line-height: 30px;
        font-weight: 700;
        color: #ff5d62;
        margin-top: 9px;
        margin-right: 25px;
        height: 30px;
        .price {
          font-size: 14px;
          line-height: 30px;
          font-weight: 600;
          vertical-align: bottom;
        }

        .cou-text {
          display: inline-block;
          float: right;
          width: 80px;
          height: 30px;
          font-weight: normal;
          background: #ff5d62;
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
}
</style>
