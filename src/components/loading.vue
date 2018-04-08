<template>
    <div class="root" v-show="show">
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loading",
        props:{
          show:{
            type:Boolean,
            default:false
          }
        }
    }
</script>

<style scoped lang="less">
  .root{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading{
      width: 150px;
      height: 15px;
      margin: 20px auto;
      position: relative;
    }
    .loading span{
      position: absolute;
      width: 15px;
      height: 100%;
      border-radius: 50%;
      background: #ff5d62;
      -webkit-animation: load 1.04s ease-in infinite alternate;
    }
    @-webkit-keyframes load{
      0%{
        opacity: 1;
        -webkit-transform: translate(0px);
      }
      100%{
        opacity: 0.2;
        -webkit-transform: translate(150px);
      }
    }
    .loading span:nth-child(1){
      -webkit-animation-delay:0.13s;
    }
    .loading span:nth-child(2){
      -webkit-animation-delay:0.26s;
    }
    .loading span:nth-child(3){
      -webkit-animation-delay:0.39s;
    }
    .loading span:nth-child(4){
      -webkit-animation-delay:0.52s;
    }
    .loading span:nth-child(5){
      -webkit-animation-delay:0.65s;
    }
  }

</style>
