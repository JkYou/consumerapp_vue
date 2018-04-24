<template>
  <div>
    <ul>
      <li v-for="(item,index) in info" :key="index" @click.stop="search(index,item.title)" :class="{'active':ind ===index}">
        <div class="imgwrap">
          <img :src="item.url" alt="">
        </div>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  const jiuURL=require("@/assets/img/jiu1.png")
  const allURL=require("@/assets/img/all1.png")
  const tehuiURL=require("@/assets/img/ershi1.png")
  const tmURL=require("@/assets/img/tian-five.png")
  import Bus from '@/components/base/bus.js'
  export default {
    name: "newNav",
    data(){
      return {
        info:[{url:allURL,title:"淘宝热卖"},{url:jiuURL,title:"9块9包邮"},{url:tehuiURL,title:"宿舍神器"},{url:tmURL,title:"天猫超市"}],
        message:'',
        istap:true,
        ind:0,
      }
    },
    mounted(){
    this.$nextTick(() => {
      Bus.$on('msg', (msg) => {
          this.message = msg
        })
    })

    },
    methods:{
      search(index,key){
        this.ind=index;
        Bus.$emit('msg', key)
        this.$store.commit("SET_KEYWORD",key);
      }
    }
  }
</script>

<style lang="less" scoped>
  ul{
    display: flex;
    width: 10rem;
    height: 80px;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    li{
      display: block;
      flex: 1;
      .imgwrap{
        width: 40px;
        height: 40px;
        margin-left: 5px;
        img{
          width: 100%;
          height:100%;
        }
      }
      p{
        margin-top: 10px;
        display: block;
        margin-left: 2px;
      }
    }
    .active{
      color: #FF1845;
    }
  }
</style>
