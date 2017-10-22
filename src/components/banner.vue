<template>
  <div class="banner">
    <mt-swipe :auto="8000" :show-indicators="false">
        <mt-swipe-item v-for="data in urlArr" key="data.id">
          <img :src="data.url">
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
      urlArr:[{url:'http://yanxuan.nosdn.127.net/5974f562346bca10da3eca9886a6a122.jpg',id:'1'},{url:'http://yanxuan.nosdn.127.net/f923eca63c75ab6ba76342267a8750a7.jpg',id:'2'}]
    }
  },
  created(){
    //   this.axios.post("http://alpha.cnpawn.cn/factor/frontAction_getBannerList.action",{"type":"1","traceNo":"201705111604385326","passWord":"57759167654C9536649C89450A6158D9"})
    //             .then((response) => {
    //                 console.log(response);
    //             })
    //             .catch((error) =>{
    //                 console.log(error);
    //             })

  }
}
</script>
<style lang="less" scoped>
.banner{
    width: 100%;
    height: 12rem;
    img{
      width: 100%;
      height: 100%;
    }
}

</style>