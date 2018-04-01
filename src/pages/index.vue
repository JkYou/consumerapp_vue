
<template>
  <div>
      <!-- <navList></navList> -->
      <!-- <markAd></markAd>     -->
      <!-- <topbar></topbar> -->
        <GoodList></GoodList>
        <!-- <goods></goods>    -->
    <!-- <proto></proto> -->
    <tabbar></tabbar>
  </div>

</template>

<script type="text/ecmascript-6">
import GoodList from '@/components/GoodList'
import proto from '@/components/proto'
import tabbar from '@/components/Tabbar'
import topbar from '@/components/Topbar'
import goods from '@/components/booklist'
import markAd from '@/components/markAd'
import navList from '@/components/navList'
    export default {
        name:'index',
        components:{
            GoodList,
            proto,
            tabbar,
            topbar,
            goods,
            markAd,
            navList
        },
        data() {
            return {
            }
        },
      mounted(){
        window.addEventListener('scroll',() =>{
          let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          if(scrollTop>100){
            console.log(scrollTop);
          }
        })
      }
    }
</script>
<style lang="less" scoped>
</style>
