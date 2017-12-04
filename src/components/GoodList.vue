<template>
  <div class="root">
      <ul class="content">
        <li class="items" v-for="item in productList.n_tbk_item"><a :href="item.item_url">
          <div class="similar-product">
            <div class="similar-pose"><img v-lazy="item.pict_url" alt=""></div>
            <span class="product_text">{{item.title}}</span>
            <p class="product_info">
              <span class="similar-product-price">¥&nbsp;
                <span class="big-price">{{item.zk_final_price}}</span><span class="small-price"></span>
              </span>
              <span class="old-price">¥&nbsp;{{item.reserve_price}}</span>
            </p>
            <p class="praise_info"><span class="praise-num"><span>近30天销量：{{item.volume}}</span></span><span class="guess-button">领优惠券</span></p>
          </div>
        </a></li>
      </ul>
  </div>
</template>

<script>
  export default {
    name: 'GoodList',
    props: {
     productList: {
      type: Object
     }
    },
    data () {
      return {
      }
    },
    methods:{
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .root{
    width: 100%;
    margin-top: .5rem;
     overflow: hidden;
    .top-tip {
      margin-top: 0 auto;
      text-align: center;
    }
    .bottom-tip{
      margin-top: 0 auto;
      text-align: center;
    }
    ul{
      width: 100%;
      overflow: hidden;
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
                 color: #666666;
                  padding: 0 5px 0 4px;
                  top: 1px;
                  height: 25px;
                  line-height: 25px;
                  font-size: 12px;
                  text-decoration: line-through;


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

</style>
