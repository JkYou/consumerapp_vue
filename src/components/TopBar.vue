<template>
	<div class="wrapper-nav" ref="wrapper">
	  <ul class="content">
	  	<li v-for="item in titleArr" @click="search($event)" :key="item.id">{{item}}</li>
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
    	titleArr:["女装","护肤","内衣","母婴","男装","零食","水果"],
    	message:'',
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
  	search:function($event,$index){
	    Bus.$emit('msg', $event.srcElement.innerText)
			this.$store.commit("SET_KEYWORD",$event.srcElement.innerText);
  	}
  }

}
</script>

<style lang="less" scoped>
.wrapper-nav{
	height: 40px;
	margin: 0 auto;
	z-index: 2;
	background: #ed424b;
	overflow-x: hidden;
	.content{
		height:40px;
		width: 450px;
		overflow-x: hidden;
		color: #ffffff;
		li{
			display: block;
			float: left;
			height:40px;
			width: 50px;
			margin: 0 2px;
			font: 14px/40px a;
		}
	}
}
</style>
