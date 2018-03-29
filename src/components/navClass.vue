<template>
    <div class="root">
      <ul>
        <li v-for="(item,index) in list" @click.stop="changeClass(index,item)" :class="{'active':ind === index}">{{item}}
          <span :class="[istap ? 'icon-xiangshangjiantou' : 'icon-xiangxiajiantou','icon iconfont']" v-show="item=='价格'"></span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "navClass",
        data(){
          return {
            list:["综合","销量","价格","店铺"],
            ind:0,
            istap:true,
            up:true
          }
        },
        methods:{
            changeClass(index,item){
              if(index===2){
                this.istap=!this.istap;
                this.up=!this.up;
              }
              this.ind=index;
              let param={"key":item,"price":this.up};
              this.$emit("sortPro",param);
            }
        }
    }
</script>

<style scoped lang="less">
.root{
  ul{
    display: flex;
    width: 100%;
    li{
      flex: 1;
      padding: 10px;
      font-size: 16px;
      color: #000;
      line-height: 1;
      text-align: center;
    }
    .active{
      color: #FF1845;
    }
  }
}
</style>
