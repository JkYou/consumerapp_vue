<template>
    <div class="root" v-show="show">
        <div class="loading">
          <mt-spinner  :type="3" ></mt-spinner>
        </div>
    </div>
</template>

<script>
  import { Spinner } from 'mint-ui';
    export default {
        name: "loading",
        props:{
          show:{
            type:Boolean,
            default:false
          }
        }
    }
</script>

<style scoped lang="less">
  .root{
    position: absolute;
    left: 50%;
    margin-left: -0.666667rem;
    width: 1.333333rem;
    height: 1.333333rem;
    bottom: 1.333333rem;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;  
  }

</style>
