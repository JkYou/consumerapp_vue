<template>
<div class="adbox">
		<mt-swipe :auto="9000">
			<mt-swipe-item v-for="data in indexData.ad" key="data.id">
				<img :src="data.url" alt="">
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
export default {

  name: 'IndexAd',
  props: {
     indexData: {
      type: Object
     }
   },
  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
.adbox{
	width: 100%;
	height: 6rem;
	margin-top: 1rem;
	border: 1px solid #ccc;
	img{
		width: 100%;
		height: 100%;
		float: left;
	}
}
</style>