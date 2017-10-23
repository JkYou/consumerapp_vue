<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  #app{
    overflow: hidden;
  .router-link-active {
    color:#52D3AA;
  }
  }
</style>
