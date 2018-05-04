<template>
<keep-alive>


  <div class="root" @click.stop="wechatStatus(1)">
    <h3 class="animated bounceInDown">美券使用攻略</h3>
    <div class="content">
      <p class="animated fadeInLeft"><b>方案1：</b>淘宝选取商品-->复制商品标题--->粘贴至美券搜索-->点击搜索结果--->打开手机淘宝自动领取优惠券-->加入购物车下单</p>
      <p class="lastp animated fadeInLeftBig"><b>方案2：</b>直接在美券搜索商品并复制淘口令--->打开手机淘宝自动领取优惠券-->加入购物车下单。</p>
      <p class="wram animated fadeInLeftBig">* 部分链接使用微信浏览器可能无法打开，请点击微信右上角按钮选择使用其他浏览器浏览！</p>
    </div>
      <div class="info">
        <div class="infowrap">
          <span @click.stop="wechatStatus(0)"><i class="icon iconfont icon-weixin" style="color: rgb(80, 182, 116);"></i></span>
          <span><a href="https://weibo.com/u/5119880962?refer_flag=1001030102_&is_hot=1" alt=""><i class="icon iconfont icon-weibo" style="color: rgb(211, 32, 36)"></i></a></span>
          <!--<span><a href="http://www.blog.19buy.top/" alt=""><i class="icon iconfont icon-GitHub" style="color: rgb(25, 23, 23)"></i></a></span>-->
        </div>
      </div>
     <div class="imgwrap animated zoomIn" v-show="wechat"><img src="../assets/wchat.jpg" alt=""></div>
    <!--<div class="btn animated pulse infinite">玩一玩</div>-->
    <!--<div class="btn"><router-link to="/navcls">Go to</router-link></div>-->
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
  </keep-alive>
</template>
<script>
  import tabbar from '@/components/Tabbar'

  export default {
    name: "guide",
    components: {
      tabbar
    },
    data(){
      return {
        wechat:false
      }
    },
    methods:{
      game(){
        this.$router.push("/game")
      },
      wechatStatus(status){
        console.log(status)
        status===0 ? this.wechat=true : this.wechat=false;
      }
    }
  }
</script>

<style lang="less" scoped>
  .root {
    width: 100%;
    height: 100%;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    background: url("../assets/aboutus.jpg") no-repeat;
    background-size:cover;
    position: relative;
    h3{
      padding-top: 30px;
      font-size: 18px;
      text-align: center;
      font-weight: 800;
      color: #fffdef;
    }
    .content{
      margin: 10px 20px;
      padding-top: 50px;
      font-size: 14px;
      line-height: 2;
      letter-spacing: inherit;
      word-spacing: 3px;
      word-wrap: break-word;
      -webkit-font-smoothing: antialiased;
      color: #fffdef;
      .lastp{
        padding-top:30px;
      }
      .wram{
        font-size: 12px;
        margin-top: 20px;
        color: #fffdef;
      }
    }
    .btn{
      width: 50px;
      height: 50px;
      box-shadow: 0 0 3px #888;
      color: #888;
      position: fixed;
      right: 60px;
      bottom: 100px;
      font-size: 12px;
      line-height: 50px;
      text-align: center;
      background: #ffffff;
      border-radius: 50%;
    }
    .info{
      position: absolute;
      bottom: 80px;
      width: 200px;
      left: 50%;
      margin-left: -100px;
      text-align: center;
      display: flex;
      justify-content: center;
      .infowrap{
        display: flex;
        span{
          flex: 1;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          i{
            font-size: 25px;
          }
        }
      }
    }
    .imgwrap{
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 250px;
      height: 350px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
