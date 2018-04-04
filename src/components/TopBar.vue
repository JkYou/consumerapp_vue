<template>
	<div class="wrapper-nav" ref="wrapper">
	  <ul class="content">
      <li v-for="(item,index) in titleArr" @click.stop="search(index,item.title)" :key="item.id" :class="{'active':ind ===index}">
        <div class="imgwrap">
          <img :src="item.url" alt="">
        </div>
        <p>{{item.title}}</p>
      </li>
	  </ul>
    </div>
</template>

<script>
import Bus from '@/components/base/bus.js'
import BScroll from 'better-scroll'
import store from 'vuex'

export default {

  name: 'TopBar',
  data () {
    return {
    	titleArr:[{title:"休闲零食",url:"//img.alicdn.com/tps/i4/TB1kMWChhWYBuNjy1zkSutGGpXa.jpg_170x120Q90s50.jpg_.webp",id:0},
        {title:"手机数码",url:"//img.alicdn.com/tps/i4/TB1OMFQhXmWBuNjSspdSuvugXXa.jpg_170x120Q90s50.jpg_.webp",id:1},
        {title:"家居清洁",url:"//img.alicdn.com/tps/i4/TB1U1yXhkOWBuNjSsppSutPgpXa.jpg_170x120Q90s50.jpg_.webp",id:2},
        {title:"洗护清洁",url:"//img.alicdn.com/tps/i4/TB1FzTLhmtYBeNjSspkSuvU8VXa.jpg_170x120Q90s50.jpg_.webp",id:3},
        {title:"美容护肤",url:"//img.alicdn.com/tps/i4/TB18gEyXpuWBuNjSszbSuwS7FXa.jpg_170x120Q90s50.jpg_.webp",id:4},
        {title:"生鲜水果",url:"//img.alicdn.com/tps/i4/TB11LOeigmTBuNjy1XbSuuMrVXa.jpg_170x120Q90s50.jpg_.webp",id:5},
        {title:"文具体育",url:"//img.alicdn.com/tps/i4/TB1vxHLhmBYBeNjy0FeSuvnmFXa.jpg_170x120Q90s50.jpg_.webp",id:6},
        {title:"宠物用品",url:"//img.alicdn.com/tps/i4/TB10hqXhkOWBuNjSsppSutPgpXa.jpg_170x120Q90s50.jpg_.webp",id:7}],
    	message:'',
      istap:true,
      ind:'',
    }
  },
  mounted(){
	this.$nextTick(() => {
		this.scroll=new BScroll(this.$refs.wrapper,{
			//api参数
			click:true,
			scrollX: true,
            eventPassthrough: 'vertical'
		})
		Bus.$on('msg', (msg) => {
         this.message = msg
         console.log("兄弟数据"+this.message);
       })
	})

  },
  methods:{
  	search:function(index,key){
      this.ind=index;
	    Bus.$emit('msg', key)
			this.$store.commit("SET_KEYWORD",key);
  	}
  }

}
</script>

<style lang="less" scoped>
.wrapper-nav{
	/*height: 40px;*/
	margin: 0 auto;
	z-index: 2;
	overflow-x: hidden;
	.content{
		height:90px;
		width: 600px;
		overflow-x: hidden;
    display: flex;
    flex: 1;
    color: #999999;
		li{
      margin: 5px 0px 5px 10px;
      width: 60px;
      height: 90px;
      .imgwrap{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 5px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      p{
        margin-top: 5px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;


      }
		}
    .active{
      color: #FF1845;
    }
	}

}
</style>
