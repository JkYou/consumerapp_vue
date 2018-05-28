<template>
<div>
<scroll class="wrapper" :pullup="pullup" @pullup="more">

<div >
    <Tbanner></Tbanner>
  <topNav></topNav>
    <TaoCard></TaoCard>
    <ul class="content">
        <li class="item" v-for="(item,index) in totalPageList" :key="index" @touchend="getCode(item.coupon_click_url,item.title,item.pict_url)"  @click="clipBordText">
            <div class="imgcontent">
                <img v-lazy="item.pict_url" alt="">
            </div>
             <div class="h3"><i class="icon iconfont icon-tianmao"></i><span>{{item.title}}</span></div>
            <div class="price">
                <span class="del"><del>¥{{item.zk_final_price}}</del></span>
                <div class="after">
                   <p>券后</p>
                   <p>￥<span>{{item.final_price}}</span></p>
                </div>
            </div>
            <div class="num">
                <div class="peo">{{item.coupon_remain_count}}人已领</div>
                <div class="cou-text">{{item.coupon_final_info}}券</div>
            </div>
        </li>
    </ul>
</div>
</scroll>
<Loading :show="loading"></Loading>
</div>

</template>
<script>
  import Tbanner from '@/components/banner'
  import scroll from '@/components/base/scroll'
  import Bus from '@/components/base/bus'
  import { MessageBox } from 'mint-ui'
  import Loading from '@/components/loading'
  import { debounce } from "@/util/util"
  import TaoCard from "@/components/TaoCard"
  import topNav from '@/components/newNav'
export default {
    name:"newList",
    data () {
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
      Tbanner,
      Loading,
      TaoCard,
      topNav
	},
    computed:{
        totalPageList(){
             let newList=Array.from(new Set(this.pageList));
             newList.map( value => {
                 if(value.title.length>9){
                    value.title=value.title.substr(0,10)+"..."
                 }
                 Object.assign(value,{"coupon_final_info":value.coupon_info.split("减")[1]});
                 let final_price=parseFloat(value.zk_final_price)-parseFloat(value.coupon_final_info.split("元")[0]);
                 Object.assign(value,{"final_price":final_price.toFixed(2)})
             })
             return newList;
        }
    },
    created(){
			this.$store.commit("SET_KEYWORD","夏季热卖");
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
    methods:{
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
            console.log(this.searchCondition.pageNo);
            param.append("pageNo", this.searchCondition.pageNo);
            param.append("q", this.$store.state.keyword);
            param.append("pageSize", this.searchCondition.pageSize);
            param.append("platform",2);
           this.axios.post('/getCouponProductList',param).then(response => {
             this.loading=false;
		     this.pageList = this.pageList.concat(response.data);
          })
          .catch( error=>{
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
.wrapper{
    width: 100%;
    height: 800px;
    .content{
    width: 10rem;
    // height:900px;
    overflow: hidden;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-top: 8px;
    .item{
        position: relative;
        box-sizing: border-box;
        float: left;
        width: 4.6rem;
        height:285px;
        margin-right: 10px;
        margin-bottom: 10px;
        background-color: #fff;
        .imgcontent{
            height: 180px;
            padding: 2px 2px 10px 2px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .h3{
            width: 100%;
            i{
                width: 20%;
                color: rgb(251, 0, 61);
                padding-left: 8px;
            }
            span{
            width: 80%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
            padding: 0 5px;
            }

        }
        .price{
            margin-top:10px;
            font-size: 14px;
            height: 40px;
            overflow: hidden;
            padding: 0 10px;
            .del{
                line-height: 40px;
            }
            .after{
               float: right;
            //    padding-right: 20px;
                p{
                    text-align: left;
                    font-size: 12px;
                    color: #cc0244;
                    span{
                        font-size: 18px;
                    }
                }

            }

        }
        .num{
            overflow: hidden;
            height: 30px;
            line-height: 30px;
            padding:0 10px 3px;
            border-bottom: 1px solid #f3f3f3;
            .peo{
                float: left;
                font-size: 12px;
                color: #969ba3;

            }
            .cou-text {
                float: right;
                position: relative;
                padding: 0 8px;
                margin: 5px 3.5px;
                height: 22px;
                line-height: 22px;
                font-size: 12px;
                color: #ffffff;
                background-color: #cc0244;
                &::before{
                    content: '';
                    position: absolute;
                    left: -3.5px;
                    top: 0;
                    width: 3.5px;
                    height: 22px;
                    background: url(http://cdn.temzt.cn/AppCms/UI/zcshare/quan_left.jpg) 0 0 no-repeat;
                    background-size: 100% 100%;
                }
                &::after{
                    content: '';
                    position: absolute;
                    right: -3.5px;
                    top: 0;
                    width: 3.5px;
                    height: 22px;
                    background: url(http://cdn.temzt.cn/AppCms/UI/zcshare/quan_right.jpg) 0 0 no-repeat;
                    background-size: 100% 100%;
                }
                }
        }
    }
}
}

</style>


