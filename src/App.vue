<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import Toast from "mint-ui";
  export default {
  name: 'app',
  mounted(){
    if(this.is_weixn()){
      Toast("点击右上角，使用其他浏览浏览，体验更好哦！")
    }
  },
  methods:{
    is_weixn() {
      var ua = navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="less">
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;overflow-x: hidden;
    .router-link-active {
      color:#FF1845;
    }
  }
</style>
