<template>
  <div class="banner">
    <mt-swipe :auto="8000">
      <mt-swipe-item>
        <img src="../assets/img/banner/banner_food.jpg" :text="水果生鲜" @click="goTopic(1)">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/banner/banner_man.jpg" :text="潮流男装" @click="goTopic(2)">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/banner/banner_spring.jpg" :text="护眼" @click="goTopic(3)">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/banner/banner_sun.jpg" :text="旅游必备" @click="goTopic(4)">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
    }
  },
  created(){

  },
  methods:{
    goTopic(type){
      let param;
      if(type===1){
        this.$store.commit("SET_TOPIC",{URL:"../../static/banner_food.jpg",text:"水果"});
      }else if(type===2){
        this.$store.commit("SET_TOPIC",{URL:"../../static/banner_man.jpg",text:"潮流男装"});
      }else if(type===3){
         this.$store.commit("SET_TOPIC",{URL:"../../static/banner_spring.jpg",text:"护眼"});
      }else{
         this.$store.commit("SET_TOPIC",{URL:"../../static/banner_sun.jpg",text:"旅游必备"});
      }
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
