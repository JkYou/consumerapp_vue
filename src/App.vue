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
  #app{
    overflow: hidden;
  .router-link-active {
    color:#52D3AA;
  }
  }
</style>
