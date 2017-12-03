
<template>
  <div>
    <Theader></Theader>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <banner></banner>
      <!-- <topbar></topbar> -->
        <GoodList :productList="indexProduct.tbk_item_get_response.results"></GoodList>
    <proto></proto>
    </mt-loadmore>
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
// Vue.component(Loadmore.name, Loadmore);

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
              indexData:{}
              // handleTopChange:'下拉刷新'
            };
        },
        methods:{
          handleScroll (){
            this.scrolled = window.scrollY > 0;
            console.log('正在滚动');
          },
          loadTop() {
            console.log(2222);
              this.$refs.loadmore.onTopLoaded();
          },
          loadBottom() {
            // 加载更多数据
            console.log(111111);
            // this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
          },
          getProduct(){
            this.axios.post('/searchProduct',{"key":"男装","itemloc":"浙江"}).then((response) => {
                if(response.data.code=='00000'){
                  this.indexProduct=JSON.parse(response.data.data);
                }
                console.log(this.indexProduct);       
            }).catch(function (error) {
              console.log(error); 
            })
            
          }
        },
        created() {
          this.getProduct();
        },

    }
</script>

<style lang="less" scoped>
div{
  overflow: scroll;
}

</style>
