
<template>
  <div>
    <Theader></Theader>
      <banner></banner>
    <GoodList></GoodList>
  </div>

</template>

<script type="text/ecmascript-6">
import banner from '@/components/banner'
import GoodList from '@/components/GoodList'
import Theader from '@/components/Theader'
    export default {
        name:'index',
        components:{
            banner,
          GoodList,
          Theader

        },
        data() {
            return {};

        },
        created() {

        },

    }
</script>

<style lang="less" scoped>

</style>
