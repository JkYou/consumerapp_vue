<template>
  <div>
    <div class="wrapper-qiang">
      <ul class="content">
        <li>
          <div class="tao-lf"><img src="http://gw.alicdn.com/tps/i4/0/TB2EUN3gStYBeNjSspaXXaOOFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg" alt=""></div>
          <div class="tao-rg">
            <div class="title">脆甜多汁 台湾金砖凤梨</div>
            <div class="des">前三十分分钟买一送一</div>
            <div class="range">
              <div class="status-progress" :style="{width:rate}"></div>
              <div class="status-msg">
                <div class="status-num">已抢699件</div>
                <div class="status-soldrate">{{rate}}</div>
              </div>
            </div>
            <div class="bot">
              <div class="pri"><span class="pt">￥</span>49.8<span class="oldpri">￥99.00</span></div>
              <div class="btn">马上抢</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Progress } from 'mint-ui';
    export default {
        name: "taoQiangList",
        components:{
          // Progress
        },
      data(){
          return {
            rate:'50%'
          }
      }
    }
</script>

<style scoped lang="less">
  .wrapper-qiang{
    width: 100%;
    height: 700px;
    .content{
      margin: 0 auto;
      width: 100%;
      background: #ffffff;
      heihgt:145px;
      li{
        display: flex;
        height: 115px;
        padding: 10px 0px 15px 0;
        border-bottom: 1px solid #f2f3f5;

        .tao-lf{
          flex: 0 1 115px;
          height: 115px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .tao-rg{
          flex: 1;
          margin-left: 5px;
          .title{
            font-size: 16px;
            color: #000;
            line-height: 20px;
            margin-top: 5px;
          }
          .des{
            font-size: 12px;
            line-height: 20px;
            color: #969ba3;
            margin: 5px 0 5px 10px;
          }
          .range{
            position: relative;
            box-sizing: border-box;
            width: 150px;
            height: 15px;
            line-height: 15px;
            border-radius: 7px;
            color: #fff;
            background: url(//gw.alicdn.com/tfs/TB1Z9jBQFXXXXX3XFXXXXXXXXXX-16-26.png) repeat-x;
            background-size: contain;
            text-align: center;
            overflow: hidden;
            margin-top: 15px;
            margin-bottom: 10px;
            .status-progress{
              border-radius: 7px;
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              min-width: .13rem;
              background: url(//gw.alicdn.com/tfs/TB1.irMQFXXXXcDXXXXXXXXXXXX-11-26.png) repeat-x;
              background-size: contain;
              /*width: 34%;*/
            }
            .status-msg{
              .status-num{
                font-size: 12px;
                position: absolute;
                left: 4px;
              }
              .status-soldrate{
                font-size: 12px;
                position: absolute;
                right: 4px;
              }
            }

          }
          .bot{
            overflow: hidden;
            margin: .05rem 0 .08rem;
            line-height: 30px;
            height: 30px;
            .pri{
              float: left;
              color: #ff5d62;
              font-size: 20px;
              font-weight: 700;
              .pt{
                font-size: 12px;
              }
              .oldpri{
                padding-left: 10px;
                font-size: 12px;
                color: #969ba3;
                font-weight: normal;
                text-decoration: line-through;
              }
            }
            .btn{
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

    }
  }

</style>
