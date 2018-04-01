<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>综合</li>
      <li>销量</li>
      <li>价格</li>
      <li>店铺</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "proType",
        data(){
          return {

          }
        }
    }
</script>

<style scoped lang="less">
  .wrapper{
    height: 40px;
    margin: 0 auto;
    z-index: 2;
    background: #ffffff;
    overflow-x: hidden;
    .content{
      height:40px;
      width: 450px;
      overflow-x: hidden;
      color: #000000;
      li{
        display: block;
        float: left;
        height:40px;
        width: 50px;
        margin: 0 2px;
        font: 14px/40px a;
      }
    }
  }

</style>
