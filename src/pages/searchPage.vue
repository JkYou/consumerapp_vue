<template>
<div class="wrap">
		<div class="head">
      <i class="icon iconfont icon-xiangzuojiantou" @click="$router.back(-1)"></i>
			<div class="searchbox">
				<input type="search" autofocus @keypress.enter="search(keyword)" v-model="keyword" placeholder="复制淘宝商品标题找券，领券省钱">
			</div>
			<div class="searchbtn">
				<button class="search" @click="search(keyword)">搜索</button>
			</div>
		</div>

  <scroll class="wrapper-search" :pullup="pullup" @pullup="more">
      <div class="content-search">
        <div class="hotwordPanel">
          <div class="hotHea"><span><i class="icon iconfont icon-huo"></i>热门搜索</span></div>
          <div class="s-mi-hq" v-for="(item,index) in hotword" :key="index" @click="search(item)"><span class="s-mi-cont-key">{{item}}</span></div>
        </div>
        <div id="root">
          <ul>
            <li  v-for="(item,index) in totalPageList" :key="index">
              <div class="good-item">
                <div class="item-left"><img v-lazy="item.pict_url" alt=""></div>
                <div class="item-right">
                  <p class="detail">{{item.title}}</p><span style="color:	#A9A9A9; display:inline-block; margin-top:10px; margin-left:5px;">{{item.shop_title}}</span>
                  <span class="couponinfo">{{item.coupon_info}}</span>
                  <div class="coupon">
                    <span class="price">￥{{item.zk_final_price}}</span>
                    <div class="cou-text animated infinite pulse" @touchend="getCode(item.coupon_click_url,item.title,item.pict_url)"  @click="clipBordText">领券</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  <scrollBtn></scrollBtn>
  <Loading :show="loading"></Loading>
</div>
</template>
<script>
  import { MessageBox } from 'mint-ui'
  import scroll from '@/components/base/scroll'
  import Loading from '@/components/loading'
  import scrollBtn from "@/components/scrollTop";
  import { debounce } from "@/util/util"
export default {

  name: 'search',
  data () {
		return {
			keyword: '',
			items: '',
			result: true,
			key: '',
      pullup:true,
      taoCode:'',
      hotword:["日用","男装","女装","零食","办公","电脑"],
			searchCondition:{  //分页属性
	          pageNo:1,
	          pageSize:30
	        },
      pageList:[],
      loading:false
			}

	},
	components: {
    scroll,
    Loading,
    scrollBtn
    },
    created(){
      this.loadPageList();  //初次访问查询列表
    },
  computed:{
    totalPageList(){
      let newList=Array.from(new Set(this.pageList))
      for(let i=0;i<newList.length;i++){
        if(newList[i].shop_title.length>9){
          newList[i].shop_title=newList[i].shop_title.substr(0,8)+"..."
        }
        if(newList[i].title.length>20){
          newList[i].title=newList[i].title.substr(0,30)+"..."
        }
      }
      return newList;
    }
  },
	methods: {
    getCode(url,text,logo){
      if(!url || !text){return;}
      let params = new URLSearchParams();
      params.append("url", url);
      params.append("text", text);
      params.append("logo", logo);
      this.axios.post('/getTaoCode',params).then(res => {
        this.taoCode=JSON.parse(res.data.data).tbk_tpwd_create_response.data.model;
      }).catch(e => {
        console.info(e);
      })
    },
    clipBordText(event){
      setTimeout(()=>{
        let hiddenInput = document.createElement('input');
        hiddenInput.value = this.taoCode;
        hiddenInput.setAttribute('readonly', '');
        hiddenInput.style.position = 'absolute';
        hiddenInput.style.left = '-9999px';
        document.body.appendChild(hiddenInput);
        hiddenInput.select();
        hiddenInput.setSelectionRange(0, hiddenInput.value.length); // ios
        document.execCommand('copy');
        document.body.removeChild(hiddenInput);
        MessageBox('美券', `淘口令 ${this.taoCode} 已复制到剪切板，打开【手机淘宝】即可领券下单`);
      },500)
    },
		search (keyword) {
			this.$store.commit("SET_KEYWORD",keyword);
      this.pageList=[];
			console.log(this.$store.state.keyword);
			 this.loadPageList();
		},
    loadPageList(){
      // 查询数据
      this.loading=true;
      let param = new URLSearchParams();
      param.append("pageNo", this.searchCondition.pageNo);
      param.append("q", this.$store.state.keyword);
      param.append("pageSize", this.searchCondition.pageSize);
      param.append("platform",2);
      this.axios.post('/getCouponProductList',param).then((response) => {
        this.loading=false;
        console.info(response.data)
        this.pageList = this.pageList.concat(response.data);
      })
        .catch(function (error) {
          this.loading=false;
          console.log(error)
        })
    },
    more(){
        // 分页查询
      this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
          debounce(this.loadPageList(),1000,500);
    }
	}
};
</script>

<style lang="less" scoped>
.wrap {
	/*width: 100%;*/
	background-color: #F3F3F3;
  .head {
    background-color: #000000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 1.4rem;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    i {
      color: #ffffff;
      padding-left: 0.4rem;
      }
    .back {
      width: 0.533333rem;
      height: 0.533333rem;
      
      img {
        width: 100%;
        height: 100%;
      }
    }
    .searchbox {
      flex: 1;
      margin:0 10px;
      input {
        height: 0.8rem;
        width: 100%;
        border: none;
        font-size: 13px;
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
      margin-right: 0.5rem;
      .search {
        color:#ffffff;
        border: none;
        outline: none;
        background:#000000;
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
      margin-top: 5px;
      color: #cc0244;
    }
    .s-mi-hq{
      float: left;
      border: 1px solid #cc0244;
      margin-right: 10px;
      margin-top: 20px;
      padding: 1px 5px;
      border-radius: 5px;
      color: inherit;
      .s-mi-cont-key{
        color: #cc0244;
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
        font-size: 0.373333rem;
        color: #333;
        display: inline-block;
        padding-right: 0.133333rem;
        margin-right: 0.133333rem;
			}
      .couponinfo{
        display: inline-block;
        float: right;
        color: #cc0244;
        padding-right: 50px;
        margin-top: 10px;
        font-size: 12px;
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
			    color: #cc0244;
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
			    	background: #cc0244;
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
