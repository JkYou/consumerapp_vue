<template>
  <div class="banner">
    <mt-swipe :auto="8000">
      <mt-swipe-item>
        <img src="../assets/img/banner/banner_food.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/banner/banner_man.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/banner/banner_spring.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/banner/banner_sun.jpg">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      msg: '我他妈是轮播图',
      urlArr:[{url:'../assets/banner.jpg',id:'1'}]
    }
  },
  created(){

  }
}
</script>
<style lang="less" scoped>
.banner{
    width: 10rem;
    height: 5rem;
    margin: 0 auto;
    padding-top: 49px;
    img{
      width: 100%;
      height: 100%;
      float: left;
    }
}

</style>
