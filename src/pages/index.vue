
<template>
  <div>
    <Header></Header>
      <banner></banner>
    <GoodList></GoodList>
  </div>

</template>

<script type="text/ecmascript-6">
import banner from '@/components/banner'
import GoodList from '@/components/GoodList'
import Header from '@/components/header'
    export default {
        name:'index',
        components:{
            banner,
          GoodList,
          Header

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
