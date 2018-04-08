<template>
  <section id="top"  v-bind:class="{ isScroll: scrolled}" @scroll.native="listenerScroll">
    <router-link to="/search" class="search">
      <input type="search">
    </router-link>
  </section>
</template>

<script>
  export default {
    name: 'topSeach',
    data () {
      return {
        msg: '头部导航',
         scrolled: false
      }
    },
    methods:{
      handleScroll(e){
        let scroll=document.body.scrollTop;
        this.scrolled=scroll >100? true:false;
        console.log(e);
      }
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.isScroll{
  background:#DD2727;
}
#top{
  width:90%;
  height: 0.8rem;
  background: none;
  z-index: 10;
  position: fixed;
  top:10px;
  display: flex;
  align-items: center;
  padding-left: 5%;
  input{
    display: none;
    border: none;
  }
  .search{
    flex:1;
    height: 0.8rem;
    display: flex;
    align-items: center;
    outline: none;
    border-radius:0.666667rem;
    border: none;
    background-color: #fff;
    background-image: url('../assets/search.png');
    background-repeat: no-repeat;
    background-size: 0.533333rem 0.533333rem;
    background-position: .4rem 50%;
    /*border: 1px solid #d9d9d9;*/
    box-shadow: 2px 2px 3px #d9d9d9;
  }
}

</style>
