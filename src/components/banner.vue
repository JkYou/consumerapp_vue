<template>
  <div class="banner">
    <mt-swipe :auto="8000">
      <mt-swipe-item v-for="(item,index) in imgArr" :key="index" >
        <img :src="item.URL" @click="goTopic(item)">
      </mt-swipe-item>

    </mt-swipe>
  </div>
</template>

<script>
  import IMG1 from '../assets/img/banner/banner_food.jpg'
  import IMG2 from '../assets/img/banner/banner_man.jpg'
  import IMG3 from '../assets/img/banner/banner_spring.jpg'
  import IMG4 from '../assets/img/banner/banner_sun.jpg'
export default {
  name: 'banner',
  data () {
    return {
      imgArr:[{
        URL:IMG1,
        text:"水果生鲜"
      },{
        URL:IMG2,
        text:"潮流男装"
      },{
        URL:IMG3,
        text:"护眼"
      },{
        URL:IMG4,
        text:"旅游必备"
      }]
    }
  },
  created(){

  },
  methods:{
    goTopic(item){
      this.$store.commit("SET_TOPIC",item);
      this.$router.push({ path: '/topic'})
    }
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
