<template>
  <section id="header">
    <router-link to="/search" class="search">
      <input type="search">
    </router-link>
  </section>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: '头部导航'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#header{
  width:90%;
  height: 3rem;
  background: none;
  z-index: 10;
  position: fixed;
  top:0;
  display: flex;
  align-items: center;
  padding-left: 5%;
  input{
    display: none;
    border: none;
  }
  .search{
    flex:1;
    height: 2rem;
    display: flex;
    align-items: center;
    outline: none;
    border-radius:2rem;
    border: none;
    background-color: #fff;
    background-image: url('../assets/search.png');
    background-repeat: no-repeat;
    background-size: 1.8rem 1.8rem;
    background-position: .8rem 50%;
  }

}

</style>
