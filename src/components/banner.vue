<template>
  <div class="banner">
    <mt-swipe :auto="8000">
      <mt-swipe-item>
        <img src="../assets/banner.jpg">
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
    width: 100%;
    height: 4.666667rem;
    img{
      width: 100%;
      height: 100%;
      float: left;
    }
}

</style>
