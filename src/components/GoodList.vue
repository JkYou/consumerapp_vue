<template>
  <div class="mainpage" ref="wrapper">
      <div class="wrapper">
        <div class="content">
          <ul>
            <li class="items" v-for="item in indexProduct"><a :href="item.item_url">
                <div class="similar-product">
                  <div class="similar-pose"><img v-lazy="item.pict_url" alt=""></div>
                  <span class="product_text">{{item.title}}</span>
                  <p class="product_info">
                    <span class="similar-product-price">¥&nbsp;
                      <span class="big-price">{{item.zk_final_price}}</span><span class="small-price"></span>
                    </span>
                    <span class="old-price">{{item.coupon_info}}</span>
                  </p>
                  <p class="praise_info"><span class="praise-num"><span>{{item.coupon_info}}</span></span><span class="guess-button"><a :href="item.coupon_click_url">领优惠券</a></span></p>
                </div>
              </a>
            </li>
         </ul>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name: 'GoodList',
    data () {
      return {
        indexProduct:[],
        pageNo:1,
      }
    },
    created() {
      this.loadData(this.pageNo);
    },
    watch:{
     data(){
      this.$nextTick(()=>{
        this.scroll.finishPullUp()
        this.scroll.refresh() 
      }) 
     }
    },
    methods:{
      loadData:function(pageNo){
         this.axios.post('/getCouponProductList',{}).then((response) => {
              this.indexProduct=response.data;  
              this.$nextTick(() => {
                this._initScroll();
              })
          }).catch(function (error) {
          }) 
      },
      _initScroll(){
        // console.log(this.$refs.wrapper)
        this.scroll=new BScroll(this.$refs.wrapper,{
          //api参数
          tap:true,
          // pullUpLoad:true,
          // threshold:40,
          // moreTxt:"dhsfk",
          // noMoreTxt:"fdsf"
        })
        // this.scroll.on("pullingUp",() => {
        //   this.loadData(this.pageNo);
        // })

      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mainpage{
  position: absolute;
  width: 100%;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
  height: 100%;
.wrapper{
  height: 100%;
  ul{
       width: 100%;
       height: 100%;
      .items{
        float: left;
        width: 50%;
        box-sizing: border-box;
        padding-bottom: 4px;
        position: relative;
         &:nth-child(2n+1){
           padding-left: 2px;
         }
        a{
          -webkit-tap-highlight-color: transparent;
          .similar-product{
            background-color: #ffffff;
            padding-bottom: 6px;
            font-size: 0;
            .similar-pose{
              position: relative;
              width: 175.5px;
              height: 175.5px;
              img{
                display: block;
                width: 100%;
                height: 100%;
              }
              image[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
              }
            }
            .product_text{
              height: 33px;
              font-size: 13px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              word-break: break-word;
              color: #232326;
              margin-top: 5px;
              line-height: 17px;
              margin-bottom: 3px;
              padding: 0 4px;
            }
            .product_info{
              height: 23px;
              font-size: 13px;
              overflow: hidden;
              .similar-product-price{
                    color: #f23030;
                    display: inline-block;
                    padding: 0 5px 0 4px;
                    position: relative;
                    top: 1px;
                    height: 25px;
                    line-height: 25px;
                    .big-price{
                      font-size: 16px;
                    }
                    .small-price{
                      font-size: 13px
                    }
              }
              .old-price{
                 color: #fff;
                  padding: 0 5px 0 10px;
                  top: 1px;
                  height: 25px;
                  line-height: 25px;
                  font-size: 12px;


                    }
            }
            .praise_info{
                  display: block;
                  padding: 0 4px;
                  position: relative;
                  top: 1px;
                  height: 25px;
                  line-height: 25px;
                  .praise-num{
                        font-size: 20px;
                        color: #999;
                        height: 25px;
                        display: block;
                        width: 100%;
                        padding-right: 60px;
                        overflow: hidden;
                        span{
                          position: relative;
                          top: 6px;
                          display: block;
                          width: 200%;
                          -webkit-transform: scale(0.6,0.6);
                          transform-origin: left top;
                          -webkit-transform-origin: left top;
                          white-space: nowrap;
                          overflow: hidden;
                        }
                  }
                  .guess-button{
                        display: block;
                        position: absolute;
                        background-color: #FF1845;
                        top: 0px;
                        right: 8px;
                        text-align: center;
                        color: #ffffff;
                        padding: 2px;
                        border-radius: 5px;
                        font-size: 12px;
                        width: 49px;
                        height: 24px;
                        line-height: 25px;
                  }
            }
          }
        }
      }
    }
}
}

</style>
