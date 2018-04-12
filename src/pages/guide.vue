<template>
  <div class="root">
    <h3 class="animated bounceInDown">使用攻略</h3>
    <div class="content">
      <p class="animated fadeInLeft"><b>方案1：</b>在【手机淘宝】中搜索自己喜欢的商品，复制商品信息到省钱大师，搜索查看该商品是否有优惠，若有，则点击领取优惠券后，优惠券信息自动复制，打开手机淘宝客户端，即可领取！</p>
      <p class="lastp animated fadeInLeftBig"><b>方案2：</b>直接在省钱大师中查找自己喜欢的商品，并点击“领券”，然后打开【手机淘宝】即可自动领取优惠券，然后再购买即可！</p>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script>
  import tabbar from '@/components/Tabbar'

  export default {
    name: "guide",
    components: {
      tabbar
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
    }
  }
</style>
