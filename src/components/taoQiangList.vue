<template>
  <div>
    <scroll class="timewrap" :scrollX="scX">
      <ul class="timeCon">
        <li v-for="(it,index) in newTimeArr" :key="index" :class="{'now':it.clsSts ===true}" @click.stop="checkTime(it.hour)">
            <p class="timeDot">{{it.hour}}:00</p>
            <p class="timests">{{it.sts}}</p>
        </li>
      </ul>
    </scroll>
    <scroll class="wrapper-qiang" :pullup="pullup" @pullup="more">
      <ul class="content">
        <!--<Card></Card>-->
        <li v-for="(item,index) in pageList" :key="index">
            <div class="tao-lf"><img v-lazy="item.pic_url" alt=""></div>
            <div class="tao-rg">
              <div class="title">{{item.title}}</div>
              <div class="des">{{item.category_name}}<div class="time">截止时间：{{item.end_time}}</div></div>
              <div class="range">
                <div class="status-progress" :style="{width:item.sold_num/item.total_amount*100+'%'}"></div>
                <div class="status-msg">
                  <div class="status-num">已抢{{item.sold_num}}件</div>
                  <div class="status-soldrate">{{((item.sold_num/item.total_amount)*100).toFixed(2)}}%</div>
                </div>
              </div>
              <div class="bot">
                <div class="pri"><span class="pt">￥</span>{{item.zk_final_price}}<span class="oldpri">￥{{item.reserve_price}}</span></div>
                <div class="btn animated infinite pulse" @touchend="getCode(item.click_url,item.title,item.pic_url)"  @click="clipBordText(item)">马上抢</div>
              </div>
            </div>
        </li>
      </ul>
    </scroll>
    <Loading :show="loading"></Loading>
  </div>
</template>

<script>
  import scroll from '@/components/base/scroll'
  import { MessageBox,Toast} from 'mint-ui'
  import Loading from '@/components/loading'
  import Card from '@/components/Card'
  import { debounce } from "@/util/util"
  export default {
        name: "taoQiangList",
        components:{
          scroll,
          Loading,
          Card,
        },
      data(){
          return {
            pullup:true,
            pageList:[],
            searchCondition:{  //分页属性
              pageNo:"1",
              pageSize:"30"
            },
            taoCode:'',
            loading:false,
            timeDot:[{hour:"8"},{hour:"9"},{hour:"10"},{hour:"11"},{hour:"12"},{hour:"13"},{hour:"14"},{hour:"15"},{hour:"16"},{hour:"17"},{hour:"18"},{hour:"19"},{hour:"20"},{hour:"21"},{hour:"22"}],
            scX:true,
            startTime:null,
            endTime:null,
          }
      },
      computed:{
          newTimeArr(){
            let oldArr=this.timeDot;
            let nowhour=window.parseInt(new Date().getHours());
            oldArr.map(value => {
              if(parseInt(value.hour)<nowhour){
                   Object.assign(value,{sts:"已经开抢"})
              }else if(parseInt(value.hour)>nowhour){
                   Object.assign(value,{sts:"即将开抢"})
              }else{
                   Object.assign(value,{sts:"抢购中",clsSts:true})
              }
            })
            return oldArr;
          }
      },
      created(){
        let date=new Date();
        let month= (date.getMonth()+1).toString().length>1 ? (date.getMonth()+1) : '0'+(date.getMonth()+1);
        let day=date.getDate().toString().length>1 ? date.getDate() : '0'+date.getDate();
        let hour=date.getHours().toString().length>1?date.getHours():'0'+date.getHours();
        this.startTime=`${date.getFullYear()}-${month}-${day} ${hour}:00:00`;
        this.endTime=`${date.getFullYear()}-${month}-${day} ${parseInt(hour)+1}:00:00`;
      },
      mounted(){
        this.loadPageList();  //初次访问查询列表
        window.addEventListener('scroll',function(e){
          console.log(e);
        })
      },
      methods:{
        scrollListener(pos){
          console.log(pos);
        },
        checkTime(hour){
          let date=new Date();
          let month= (date.getMonth()+1).toString().length>1 ? (date.getMonth()+1) : '0'+(date.getMonth()+1);
          let day=date.getDate().toString().length>1 ? date.getDate() : '0'+date.getDate();
          this.startTime=`${date.getFullYear()}-${month}-${day} ${hour}:00:00`;
          this.endTime=`${date.getFullYear()}-${month}-${day} ${parseInt(hour)+1}:00:00`;
          this.pageList=[];
          this.loadPageList();
        },
        loadPageList(){
          // 查询数据
          this.loading=true;
          let param = new URLSearchParams();
          param.append("pageNo", this.searchCondition.pageNo);
          param.append("pageSize", this.searchCondition.pageSize);
          param.append("startTime", this.startTime);
          param.append("endTime", this.endTime);
          this.axios.post('/getTaoQiang',param).then( res => {
              this.loading=false;
              if(JSON.parse(res.data.data).tbk_ju_tqg_get_response.results){
                this.pageList = this.pageList.concat(JSON.parse(res.data.data).tbk_ju_tqg_get_response.results.results);
              }else{
                Toast("服务器异常，请重试")
              }
          })
          .catch( error => {
            this.loading=false;
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
        clipBordText(event,item){
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
            MessageBox('美券', `淘口令 ${this.taoCode} 已复制到剪切板，打开【手机淘宝】即可领券下单`);
          },600)
        },
        more(){
          this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
          debounce(this.loadPageList(),1000,500);
        }
      }
    }
</script>

<style scoped lang="less">
  .timewrap{
    height: 55px;
    background: #ffffff;
    z-index: 1000;
    .timeCon{
      display: flex;
      margin: 0 auto;
      height: 55px;
      width: 900px;
      li{
        width: 140px;
        padding: 10px 5px 10px 5px;
        color: #ffffff;
        background: #666666;
        border-right: 1px solid #ffffff;
        p{
          text-align: center;
          &:last-child{  
            margin-top: 5px;
          }
        }
      }
      .now{
        background: #cc0244;
        width: 140px;
        padding: 10px 5px 10px 5px;
        color: #ffffff;
        border-right: 1px solid #ffffff;
        position: relative;
        &:before,&:after{  
         border: solid transparent;
        content: ' ';
        height: 0;
        left: 100%;    //根据三角形的位置，可以随意更改。
        position: absolute;
        width: 0;
        }
      }
    }
  }
  .wrapper-qiang{
    width: 100%;
    height: 700px;
    .content{
      margin: 0 auto;
      width: 100%;
      background: #ffffff;
      height:145px;
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
              color: #cc0244;
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
              background: #cc0244;
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
    .nullSts{
      width: 100%;
      height: 100%;
      padding-top: 300px;
      margin: 0 auto;
    }
  }

</style>
