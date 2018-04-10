<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import{mapMutations} from 'vuex'
export default {
  name: 'app',
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
