<template>
  <section id="top">
    <router-link to="/search" class="search">
      <input type="search">
    </router-link>
     <div class="categrey"><i class="icon iconfont icon-fenlei"></i></div>
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
#top{
  width: 10rem;
  height: 50px;
  background: rgba(0, 0, 0, 1);
  z-index: 10;
  position: absolute;
  display: flex;
  align-items: center;
  input{
    display: none;
    border: none;
  }
  .categrey{
    flex: 0 1 50px;
    text-align: center;
    i{
      font-size: 30px;
      color: #ffffff; 
      line-height: 50px;
    }
  }
  .search{
    flex: 1;
    height: 0.9rem;
    align-items: center;
    outline: none;
    margin-left:20px; 
    border-radius:0.666667rem;
    border: none;
    background-color: #fff;
    background-image: url('../assets/search.png');
    background-repeat: no-repeat;
    background-size: 0.533333rem 0.533333rem;
    background-position: .4rem 50% ;
    // /*border: 1px solid #d9d9d9;*/
    // box-shadow: 2px 2px 3px #d9d9d9;
  }
 
}

</style>
