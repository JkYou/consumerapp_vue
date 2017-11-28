
<template>
  <div>
    <Theader></Theader>
      <banner></banner>
      <topbar></topbar>
    <GoodList></GoodList>
    <proto></proto>
    <tabbar></tabbar>
  </div>

</template>

<script type="text/ecmascript-6">
import banner from '@/components/banner'
import GoodList from '@/components/GoodList'
import Theader from '@/components/Theader'
import proto from '@/components/proto'
import car from '@/components/car'
import tabbar from '@/components/Tabbar'
import topbar from '@/components/Topbar'

    export default {
        name:'index',
        components:{
            banner,
          GoodList,
          Theader,
          proto,
          tabbar,
          topbar

        },
        data() {
            return {
              scrolled:false,
            };
        },
        methods:{
          handleScroll (){
            this.scrolled = window.scrollY > 0;
            console.log('正在滚动');
          }
        },
        created() {
          window.addEventListener('scroll', this.handleScroll);

        },

    }
</script>

<style lang="less" scoped>

</style>
