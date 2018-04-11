<template>
  <div>
    <div class="content">
      <div class="imgwrap" @click="goTao">
        <div class="spanwrap">
          <span>{{hour}}</span> :
          <span>{{newmins}}</span> :
          <span>{{newmill}}</span>
        </div>
      </div>
      <div class="taowrap">
        <div class="top"></div>
        <div class="con">
          <a :href="productList[0].item_url"><img :src="productList[0].pict_url" alt=""></a>
          <a :href="productList[1].item_url"><img :src="productList[1].pict_url" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "taoCard",
    data() {
      return {
        productList: [],
        hour: '00',
        mins: 20,
        mill: 0,
      }
    },
    created() {
      this.getPro();
    },
    mounted() {
      this.timeControl();
    },
    computed: {
      newmill() {
        let newmill = this.mill.toString().length < 2 ? `0${this.mill}` : this.mill;
        return newmill;
      },
      newmins() {
        let newmins = this.mins.toString().length < 2 ? `0${this.mins}` : this.mins;
        return newmins;
      }

    },
    methods: {
      timeControl() {
        let timer = setInterval(() => {
          if (this.mill <= 1) {
            this.mins--;
            if (this.mins === 0) {
              clearInterval(timer);
              this.mins = 0;
              this.mill = 0;
            }
            this.mill = 60;
          }
          this.mill--;
        }, 1000);
      },
      goTao() {
        this.$router.push("/juhuasuan")
      },
      getPro() {
        let param = new URLSearchParams();
        param.append("pageNo", 1);
        param.append("pageSize", 2);
        param.append("q", '韩版夏装');
        param.append("platform", 2);
        param.append("sort", "total_sales");
        param.append("is_tmall", true);
        this.axios.post('/getProductList', param).then(res => {
          this.productList = JSON.parse(res.data.data).tbk_item_get_response.results.n_tbk_item;
          console.log(this.productList)
        }).catch(err => {
          throw Error(err);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    width: 100%;
    height: 180px;
    display: flex;
    .imgwrap {
      flex: 0 1 150px;
      height: 180px;
      background: url("../assets/taoqianggou.jpg") no-repeat;
      background-size: cover;
      position: relative;
      .spanwrap {
        position: absolute;
        top: 32%;
        left: 10px;

        span {
          background: rgba(0, 0, 0, .5);
          color: #ffffff;
          display: inline-block;
          padding: 5px;
        }

      }

    }
    .taowrap {
      flex: 1;
      height: 180px;
      .top {
        height: 50px;
        background: url("../assets/onlg.png") no-repeat;
        background-size: cover;

      }
      .con {
        padding-top: 10px;
        .tit {
          font-size: 14px;
          color: #969ba3;
          word-spacing: 3px;
          padding-top: 5px;
          padding-bottom: 5px;
          text-indent: 2px;
          font-family: inherit;
        }
        img {
          width: 45%;
          height: 110px;
        }
      }
    }
  }

</style>
