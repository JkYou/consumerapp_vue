<template>
  <div>
    <div class="card">
      <div class="top">
        <img src="../assets/must.png" alt="">
      </div>
      <div class="content">
        <div class="imgwrap">
          <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item,index) in product.small_images.string" :key="index">
              <img :src="item">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <p class="detail">{{product.title}}</p>
        <div class="bot">
          <div class="pri"><span class="pt">￥</span>{{product.zk_final_price}}<span class="oldpri">￥{{product.reserve_price}}</span>
          </div>
          <div class="btn"><a :href="product.item_url">立即抢购</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {MessageBox} from "mint-ui";

  export default {
    name: "Card",
    data(){
      return{
        product:{},
        taoCode:""
      }
    },
    created(){
      this.getPro();
    },
    methods:{
      getPro() {
        let param = new URLSearchParams();
        param.append("pageNo", 1);
        param.append("pageSize", 3);
        param.append("q", '韩版夏装');
        param.append("platform", 2);
        param.append("sort", "total_sales");
        param.append("is_tmall", true);
        this.axios.post('/getProductList', param).then(res => {
          this.product = JSON.parse(res.data.data).tbk_item_get_response.results.n_tbk_item[2];
          console.log(this.product)
        }).catch(err => {
          throw Error(err);
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .card{
    width: 95%;
    margin: 0 auto;
    height: 280px;
    box-shadow:0px 4px 5px #6E6E6E;
    border-radius: 5px;
    .top {
      height: 40px;
      width: 100%;
      img{
        width: 200px;
        height: 100%;
        margin-left: 10px;
      }
    }
    .content{
      .imgwrap{
        width: 100%;
        height: 160px;
        img{
          width: 100%;
          height: 100%;
          float: left;
        }
      }
      .detail{
        display: inline-block;
        margin-top: 10px;
        font-size: 14px;
        color: #333;
        display: inline-block;
        padding-right: 5px;
        margin-right: 5px;
      }
      .bot {
        overflow: hidden;
        margin: .05rem 0 .08rem;
        line-height: 30px;
        height: 30px;
        .pri {
          float: left;
          color: #ff5d62;
          font-size: 20px;
          font-weight: 700;
          .pt {
            font-size: 12px;
          }
          .oldpri {
            padding-left: 10px;
            font-size: 12px;
            color: #969ba3;
            font-weight: normal;
            text-decoration: line-through;
          }
        }
        .btn {
          overflow: hidden;
          float: right;
          width: 50px;
          height: 30px;
          color: #fff;
          background: #ff5d62;
          line-height: 30px;
          text-align: center;
          padding: 0 5px;
          margin-right: 20px;
          border-radius: 4px;
          font-weight: 700;
        }
      }
    }
  }

</style>
