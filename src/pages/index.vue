
<template>
  <div>
    <Theader></Theader>
      <banner></banner>
      <topbar></topbar>
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <GoodList :productList="indexProduct.tbk_item_get_response.results"></GoodList>
      </mt-loadmore>
    <proto></proto>
    <tabbar></tabbar>
  </div>

</template>

<script type="text/ecmascript-6">
import banner from '@/components/banner'
import GoodList from '@/components/GoodList'
import Theader from '@/components/Theader'
import proto from '@/components/proto'
import car from '@/components/car'
import tabbar from '@/components/Tabbar'
import topbar from '@/components/Topbar'
import { Loadmore } from 'mint-ui';
    export default {
        name:'index',
        components:{
            banner,
            GoodList,
            Theader,
            proto,
            tabbar,
            topbar
        },
        data() {
            return {
              scrolled:false,
              allLoaded:false,
              indexProduct:{},
              pageNo:1
              // handleTopChange:'下拉刷新'
            };
        },
        methods:{
          handleScroll (){
            this.scrolled = window.scrollY > 0;
            console.log('正在滚动');
          },
          loadTop() {
            this.$refs.loadmore.onTopLoaded();
          },
          loadBottom() {
            this.allLoaded = false;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
            this.pageNo++;
            this.getProduct(this.pageNo);
          },
            getProduct(pageNo){
              console.log(pageNo);
              this.axios.post('/getProductList',{"pageNo":pageNo}).then((response) => {
                 console.log(response);
                  if(response.status=='200'){
                    this.indexProduct=JSON.parse(response.data.data);
                  }       
              }).catch(function (error) {

              })

            }
        },
        created() {
          this.getProduct(1);
        },

    }
</script>

<style lang="less" scoped>
div{
  overflow: hidden;
}

</style>
