<template>
	<div id="root">
    <navClass></navClass>
    <tabbar></tabbar>
  </div>

</template>

<script>
import tabbar from '@/components/Tabbar'
import  navClass from '@/components/navClass'
export default {

  name: 'taoqiang',

  data () {
    return {

    }
  },
   components:{
       navClass,
       tabbar,
        },
}
</script>

<style lang="less" scoped>

</style>
