<template>
<div class="root" >
  <scroll class="wrapper" :data="data" :pullup="pullup" @pullup="loadData">
      <ul class="content">
        <li>
          <div class="item">
            <div class="top">
              <div class="left"><img src="http://logo.taobaocdn.com/shop-logo/79/15/TB1DR_Ffx6I8KJjSszfSuuZVXXa.jpg" alt=""></div>
              <div class="right">
                <p class="ptop">耐克官方旗舰店</p>
                <p>杭州 滨江</p>
              </div>
            </div>
            <div class="content"></div>
          </div>
        </li>
      </ul>
  </scroll>

	<tabber></tabber>
</div>
</template>

<script  type="text/ecmascript-6">
import scroll from '@/components/base/scroll'
import tabber from '@/components/Tabbar'
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
	   tabber
    }
}
</script>

<style lang="less" scoped>
.root{
	width: 100%;
  overflow-x: hidden;
  .wrapper{
    width: 100%;
    height: 700px;
    .item{
      display: block;
      width: 100%;
      height: 180px;
      padding: 5px;
      .top{
        height: 70px;
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

    }
  }
}
</style>
