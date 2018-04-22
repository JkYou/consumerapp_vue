
<template>
  <div>
    <TNav/>  
    <GoodList/>
    <tabbar></tabbar>
  </div>

</template>

<script type="text/ecmascript-6">
import GoodList from '@/components/GoodList'
import tabbar from '@/components/Tabbar'
import TNav from '@/components/topSeach'
    export default {
        name:'index',
        components:{
            GoodList,
            tabbar,
            TNav
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
