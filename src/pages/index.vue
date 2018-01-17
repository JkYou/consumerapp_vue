
<template>
  <div>
    <!-- <Theader></Theader> -->
      <!-- <banner></banner> -->
      <!-- <topbar></topbar> -->
        <GoodList></GoodList>
        <!-- <goods></goods>    -->
    <!-- <proto></proto> -->
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
import goods from '@/components/booklist'
    export default {
        name:'index',
        components:{
            banner,
            GoodList,
            Theader,
            proto,
            tabbar,
            topbar,
            goods
        },
        data() {
            return {
            }
        }
    }
</script>
<style lang="less" scoped>
</style>
