<template>
<div class="root" >
  <taoQiang></taoQiang>
	<tabber></tabber>
</div>
</template>

<script  type="text/ecmascript-6">
import scroll from '@/components/base/scroll'
import tabber from '@/components/Tabbar'
import proType from '@/components/proType'
import taoQiang from '@/components/taoQiangList'

export default {

  name: 'juhuasuan',

  data () {
    return {
      pullup:true,
      data:[1,2,4,1,2,4,5,6564,5345,543,34534,5345,345,354,5435,345,534],
    }
  },
  methods: {
    loadData() {
        console.log("数据加载中")
    }
  },
   components: {
	   scroll,
	   tabber,
     proType,
     taoQiang
    }
}
</script>

<style lang="less" scoped>
.root{
	width: 100%;
  overflow-x: hidden;
  background: #F5F5F5;
  .wrapper{
    width: 100%;
    height: 700px;
    .item{
      display: block;
      width: 100%;
      height: 180px;
      padding: 5px;
      background: #ffffff;
      margin: 10px 10px 0px 0px;
      box-shadow: 0px 0px 5px #C0C0C0;
      .top{
        height: 60px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #DCDCDC;
        .left{
          flex: 0 1 70px;
          height: 65px;
          width: 65px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .right{
          flex: 1;
          height: 70px;
          margin-left: 20px;
          p{
            font-size: 13px;
            color: 	#A9A9A9;
            margin-top: 5px;
          }
          .ptop{
            font-size: 18px;
            color: #808080;
            margin-bottom: 10px;
          }
        }
      }
      .content{
        width: 100%;
        ul{
          display: flex;
          overflow-y: hidden;
          li{
            width: 100px;
            .cntop{
              width: 80px;
              margin: 10px 0 0 5px;
              height: 80px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .cntprice{
              margin-left: 10px;
              font: 14px/30px a;
              color: #666666;
            }
          }
        }


      }
    }
  }
}
</style>
