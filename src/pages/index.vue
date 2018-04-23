
<template>
  <div>
    <TNav/>  
    <!-- <GoodList/>
     -->
      <List/>
    <tabbar></tabbar>
  </div>

</template>

<script type="text/ecmascript-6">
import GoodList from '@/components/GoodList'
import tabbar from '@/components/Tabbar'
import TNav from '@/components/topSeach'
import List from '@/components/newList'
    export default {
        name:'index',
        components:{
            GoodList,
            tabbar,
            TNav,
            List
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
