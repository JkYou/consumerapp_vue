<template>
  <div class="root">
    <ul>
      <li class="items" v-for="item in dataArr"><a href="#">
        <div class="similar-product">
          <div class="similar-pose"><img :src="item.img" alt=""></div>
          <span class="product_text">{{item.content}}</span>
          <p class="product_info">
            <span class="similar-product-price">¥&nbsp;
              <span class="big-price">{{item.price}}</span><span class="small-price">.00</span> 
            </span>
            <span class="old-price">¥&nbsp;{{item.oldprice}}</span>
          </p>
          <p class="praise_info"><span class="praise-num"><span>好评率{{item.praise}}</span></span><span class="guess-button">领优惠券</span></p>
        </div>
      </a></li>
    </ul>
  </div>
</template>

<script>
import { Loadmore } from 'mint-ui';
  export default {
    name: 'GoodList',
    data () {
      return {
        msg: '商品列表',
        dataArr:[{img:'//m.360buyimg.com//mobilecms/s276x276_jfs/t4507/361/4653622104/393108/667b7271/591197d6N182118fb.jpg!q70.jpg',
                content:'苹果 Apple 2017新款 iPad 平板电脑 9.7 英寸 Ari2 升级版 金色 32G WiFi版',
                price:'3699',oldprice:'6777',praise:'50%'},{img:'//m.360buyimg.com//mobilecms/s276x276_jfs/t4507/361/4653622104/393108/667b7271/591197d6N182118fb.jpg!q70.jpg',
                content:'苹果 Apple 2017新款 iPad 平板电脑 9.7 英寸 Ari2 升级版 金色 32G WiFi版',
                price:'3699',oldprice:'6999',praise:'100%'},
                {img:'//m.360buyimg.com//mobilecms/s276x276_jfs/t4507/361/4653622104/393108/667b7271/591197d6N182118fb.jpg!q70.jpg',
                content:'苹果 Apple 2017新款 iPad 平板电脑 9.7 英寸 Ari2 升级版 金色 32G WiFi版',
                price:'3699',oldprice:'1000',praise:'90%'},{img:'//m.360buyimg.com//mobilecms/s276x276_jfs/t4507/361/4653622104/393108/667b7271/591197d6N182118fb.jpg!q70.jpg',
                content:'苹果 Apple 2017新款 iPad 平板电脑 9.7 英寸 Ari2 升级版 金色 32G WiFi版',
                price:'3699',oldprice:'999',praise:'50%'},{img:'//m.360buyimg.com//mobilecms/s276x276_jfs/t4507/361/4653622104/393108/667b7271/591197d6N182118fb.jpg!q70.jpg',
                content:'苹果 Apple 2017新款 iPad 平板电脑 9.7 英寸 Ari2 升级版 金色 32G WiFi版',
                price:'3699',oldprice:'677',praise:'50%'}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .root{
    width: 100%;
    margin-top: .5rem;
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
              width: 185.5px;
              height: 185.5px;
              img{
                display: block;
                width: 100%;
                height: 100%;
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
