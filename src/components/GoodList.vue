<template>
	<div id="root">

    <scroll class="wrapper" :pullup="pullup" @pullup="more">
      <ul class="content">
        <TNav></TNav>
        <Tbanner></Tbanner>
        <TaoCard></TaoCard>
        <topbar></topbar>
        <li  v-for="item in totalPageList">
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
    </scroll>
    <Loading :show="loading"></Loading>
	</div>
</template>

<script>
  import Tbanner from '@/components/banner'
  import TNav from '@/components/topSeach'
  import scroll from '@/components/base/scroll'
  import topbar from '@/components/Topbar'
  import Bus from '@/components/base/bus'
  import { MessageBox } from 'mint-ui'
  import Loading from '@/components/loading'
  import { debounce } from "@/util/util"
  import TaoCard from "@/components/TaoCard"


  export default {
    name :"GoodList",
    data:function() {
      return {
        searchCondition:{  //分页属性
          pageNo:1,
          pageSize:30
        },
        pageList:[],
        pullup:true,
        taoCode:'',
        loading:false
      }
    },
    components: {
      scroll,
      topbar,
      Tbanner,
      TNav,
      Loading,
      TaoCard
		},
		created(){
			this.$store.commit("SET_KEYWORD","潮流春装");
		},
   computed:{
     totalPageList(){
       let newList=Array.from(new Set(this.pageList))
       for(let i=0;i<newList.length;i++){
         if(newList[i].shop_title.length>9){
           newList.splice(i,1);
         }
       }
       return newList;
     }
   },
    mounted(){
			Bus.$on('msg', (msg) => {
        //  this.message = msg
				 this.$store.commit("SET_KEYWORD", msg);
				 this.pageList=[];
				 this.loadPageList();  //初次访问查询列表
			})
      this.loadPageList();  //初次访问查询列表
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
        setTimeout(()=> {
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
          console.log(this.taoCode);
          MessageBox('省钱大师', `淘口令 ${this.taoCode} 已复制到剪切板，打开【手机淘宝】即可领券下单`);
        },500)
      },
      loadPageList(){
        this.loading=true;
             // 查询数据
            let param = new URLSearchParams();
            param.append("pageNo", this.searchCondition.pageNo);
            param.append("q", this.$store.state.keyword);
            param.append("pageSize", this.searchCondition.pageSize);
            param.append("platform",2);
           this.axios.post('/getCouponProductList',param).then((response) => {
             this.loading=false;
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
