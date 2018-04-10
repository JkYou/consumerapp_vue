<template>
    <div>
      <div class="scr" v-show="btn" @click="scrollTo"><i class="icon iconfont icon-shangfan"></i></div>
    </div>
</template>

<script>
  import Bus from '@/components/base/bus'
  export default {
        name: "scrollTop",
        data(){
              return{
                btn:false
              }
        },
        mounted(){
          Bus.$on('lisScr', (msg) => {
            this.btn=msg
          })
        },
        methods:{
          scrollTo(){
            Bus.$emit('scrollTop', true)
          }
        },
  }
</script>

<style scoped lang="less">
  .scr{
    z-index: 1000;
    position: fixed;
    right: 40px;
    bottom: 40px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #DCDCDC;
    background: #fff;
    line-height: 30px;
    text-align: center;
    color: #666;
    box-shadow: 0 0 3px #ffffff;
    i{
      font-size: 16px;
    }
  }

</style>
