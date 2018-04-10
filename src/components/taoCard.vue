<template>
  <div>
    <div class="content">
      <div class="imgwrap">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="taowrap">
        <div class="top"></div>
        <div class="con">
          <p class="tit">好的品味从挑剔开始</p>
          <img src="http://img.alicdn.com/tfscom/i4/803368268/TB18fPQkwmTBuNjy1XbXXaMrVXa_!!0-item_pic.jpg" alt="">
          <img src="http://img.alicdn.com/tfscom/i4/803368268/TB18fPQkwmTBuNjy1XbXXaMrVXa_!!0-item_pic.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "taoCard"
    }
</script>

<style scoped lang="less">
  .content{
    width: 100%;
    height: 180px;
    display: flex;
    .imgwrap{
      flex: 0 1 150px;
      height: 180px;
      background: url("../assets/taoqianggou.jpg") no-repeat;
      background-size: cover;
      position: relative;
    }
    .taowrap{
      flex: 1;
      height: 180px;
      .top{
        height: 40px;
        background: url("../assets/onlg.png") no-repeat;
        background-size: cover;

      }
      .con{
        .tit{
          font-size: 14px;
          color: #969ba3;
          word-spacing: 3px;
          padding-top: 5px;
          padding-bottom: 5px;
          text-indent: 2px;
          font-family: inherit;
        }
        img{
          width: 45%;
          height: 110px;
        }
      }
    }
  }

</style>
