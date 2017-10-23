<template>
  <div class="hello">
{{msg}}
  </div>
</template>

<script>
  export default {
    name: 'GoodList',
    data () {
      return {
        msg: '商品列表'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello{
    width: 100%;
    height: 500px;
  }

</style>
