<template>
  <div>
    <scroll class="wrapper-qiang" :pullup="pullup" @pullup="more">
      <ul class="content">
        <li v-for="(item,index) in pageList" :key="index">
          <div class="tao-lf"><img v-lazy="item.pic_url" alt=""></div>
          <div class="tao-rg">
            <div class="title">{{item.title}}</div>
            <div class="des">{{item.category_name}}<div class="time">截止时间：{{item.end_time}}</div></div>
            <div class="range">
              <div class="status-progress" :style="{width:item.sold_num/item.total_amount*100+'%'}"></div>
              <div class="status-msg">
                <div class="status-num">已抢{{item.sold_num}}件</div>
                <div class="status-soldrate">{{(item.sold_num/item.total_amount)*100}}%</div>
              </div>
            </div>
            <div class="bot">
              <div class="pri"><span class="pt">￥</span>{{item.zk_final_price}}<span class="oldpri">￥{{item.reserve_price}}</span></div>
              <div class="btn" @touchend="getCode(item.click_url,item.title,item.pic_url)"  @click="clipBordText">马上抢</div>
            </div>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import scroll from '@/components/base/scroll'
  import { Toast } from 'mint-ui'
    export default {
        name: "taoQiangList",
        components:{
          scroll
        },
      data(){
          return {
            pullup:true,
            pageList:[],
            searchCondition:{  //分页属性
              pageNo:"1",
              pageSize:"20"
            },
            taoCode:''
          }
      },
      mounted(){
        this.loadPageList();  //初次访问查询列表
      },
      methods:{
        loadPageList:function (page){
          // 查询数据
          let param = new URLSearchParams();
          param.append("pageNo", this.searchCondition.pageSize);
          param.append("pageSize", this.searchCondition.pageSize);
          this.axios.post('/getTaoQiang',param).then( res => {
            this.pageList = this.pageList.concat(JSON.parse(res.data.data).tbk_ju_tqg_get_response.results.results);
          })
          .catch( error => {
            console.log(error)
          })
        },
        getCode(url,text,logo){
          if(!url || !text){return;}
          let params = new URLSearchParams();
          params.append("url", url);
          params.append("text", text);
          params.append("logo", logo);
          this.axios.post('/getTaoCode',params).then(res => {
            this.taoCode=JSON.parse(res.data.data).tbk_tpwd_create_response.data.model;
          }).catch(e => {
            console.info(e);
          })
        },
        clipBordText(event){
          setTimeout(()=>{
            let hiddenInput = document.createElement('input');
            hiddenInput.value = this.taoCode;
            hiddenInput.setAttribute('readonly', '');
            hiddenInput.style.position = 'absolute';
            hiddenInput.style.left = '-9999px';
            document.body.appendChild(hiddenInput);
            hiddenInput.select();
            hiddenInput.setSelectionRange(0, hiddenInput.value.length); // ios
            document.execCommand('copy');
            document.body.removeChild(hiddenInput);
            Toast("淘口令已复制到剪切板，打开【手机淘宝】既可领券下单");
          },600)
        },
        more(){
          this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
          this.loadPageList(this.searchCondition.pageNo);
        }
      }
    }
</script>

<style scoped lang="less">
  .wrapper-qiang{
    width: 100%;
    height: 700px;
    .content{
      margin: 0 auto;
      width: 100%;
      background: #ffffff;
      heihgt:145px;
      li{
        display: flex;
        height: 115px;
        padding: 10px 0px 15px 0;
        border-bottom: 1px solid #f2f3f5;

        .tao-lf{
          flex: 0 1 115px;
          height: 115px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .tao-rg{
          flex: 1;
          margin-left: 5px;
          .title{
            font-size: 16px;
            color: #000;
            line-height: 20px;
            margin-top: 5px;
          }
          .des{
            font-size: 12px;
            line-height: 20px;
            color: #969ba3;
            overflow: hidden;
            margin: 5px 0 5px 10px;
            .time{
              float: right;
              color: #3CB371;
              margin-right: 10px;
            }
          }
          .range{
            position: relative;
            box-sizing: border-box;
            width: 150px;
            height: 15px;
            line-height: 15px;
            border-radius: 7px;
            color: #fff;
            background: url("../assets/light.png") repeat-x;
            background-size: contain;
            text-align: center;
            overflow: hidden;
            margin-top: 15px;
            margin-bottom: 10px;
            .status-progress{
              border-radius: 7px;
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              min-width: .2rem;
              background: url("../assets/deep.png") repeat-x;
              background-size: contain;
              /*width: 34%;*/
            }
            .status-msg{
              .status-num{
                font-size: 12px;
                position: absolute;
                left: 4px;
              }
              .status-soldrate{
                font-size: 12px;
                position: absolute;
                right: 4px;
              }
            }

          }
          .bot{
            overflow: hidden;
            margin: .05rem 0 .08rem;
            line-height: 30px;
            height: 30px;
            .pri{
              float: left;
              color: #ff5d62;
              font-size: 20px;
              font-weight: 700;
              .pt{
                font-size: 12px;
              }
              .oldpri{
                padding-left: 10px;
                font-size: 12px;
                color: #969ba3;
                font-weight: normal;
                text-decoration: line-through;
              }
            }
            .btn{
              overflow: hidden;
              float: right;
              width: 50px;
              height: 30px;
              color: #fff;
              background: #ff5d62;
              line-height: 30px;
              text-align: center;
              padding: 0 5px;
              margin-right: 20px;
              border-radius: 4px;
              font-weight: 700;
            }
          }
        }
      }

    }
  }

</style>
