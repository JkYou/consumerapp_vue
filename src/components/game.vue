<template>
  <div class="awardRotate">
    <img src="../assets/img/2.png" id="shan-img" style="display:none;"/>
    <img src="../assets/img/1.png" id="sorry-img" style="display:none;"/>
    <div class="banner">
      <div class="turnplate">
        <canvas class="item" id="wheelcanvas" width="422px" height="422px"></canvas>
        <img class="pointer" src="../assets/img/turnplate-pointer.png" v-on:click="pointer"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {myfun} from '../assets/js/awardRotate'
  import {Toast} from 'mint-ui'

  export default {
    name: 'game',
    data() {
      return {
        msg: '',
        turnplate: {
          restaraunts: [],
          colors: [],
          outsideRadius: 192,
          textRadius: 155,
          insideRadius: 68,
          startAngle: 0,
          bRotate: false
        }
      }
    },
    created() {
      document.title = '大转盘抽奖'
      this.$nextTick(() => {
        this.turnplate.restaraunts = ['朱天可煞笔', '唱首歌', '谢谢参与', '真心话', '发红包', '在一起', '教授煞笔', '大冒险', '学狗叫',
          '喝一杯', '捏鼻子']
        this.turnplate.colors = ['#FFF4D6', '#FFFFFF', '#FFF4D6', '#FFFFFF', '#FFF4D6', '#FFFFFF', '#FFF4D6', '#FFFFFF', '#FFF4D6', '#FFFFFF', '#FFF4D6']
        this.rotateTimeOut()
        this.rotateFn()
        this.drawRouletteWheel()
      })
    },
    components: {
      myfun
    },
    methods: {
      rotateTimeOut: function () {
        $('#wheelcanvas').rotate({
          angle: 0,
          animateTo: 2160,
          duration: 8000,
          callback: function () {
            Toast({message: '网络超时，请检查您的网络设置！', position: 'middle'})
          }
        })
      },
      rotateFn: function (item, txt) {
        var angles = item * (360 / this.turnplate.restaraunts.length) - (360 / (this.turnplate.restaraunts.length * 2))
        if (angles < 270) {
          angles = 270 - angles
        } else {
          angles = 360 - angles + 270
        }
        var bRotateT = this.turnplate.bRotate
        this.$nextTick(() => {
          $('#wheelcanvas').stopRotate()
          $('#wheelcanvas').rotate({
            angle: 0,
            animateTo: angles + 1800,
            duration: 8000,
            callback: function () {
              Toast({message: txt, position: 'middle'})
              if (bRotateT) {
                bRotateT = false
              } else {
                bRotateT = true
              }
            }
          })
        })
        this.turnplate.bRotate = bRotateT
      },
      pointer() {
        // if (this.turnplate.bRotate) return
        this.turnplate.bRotate = !this.turnplate.bRotate
        // 获取随机数(奖品个数范围内)
        var item = Math.floor(Math.random() * (this.turnplate.restaraunts.length - 1 + 1) + 1)
        // 奖品数量等于10,指针落在对应奖品区域的中心角度[252, 216, 180, 144, 108, 72, 36, 360, 324, 288]
        this.rotateFn(item, this.turnplate.restaraunts[item - 1])
      },
      drawRouletteWheel() {
        var canvas = document.getElementById('wheelcanvas')
        if (canvas.getContext) {
          // 根据奖品个数计算圆周角度
          var arc = Math.PI / (this.turnplate.restaraunts.length / 2)
          var ctx = canvas.getContext('2d')
          // 在给定矩形内清空一个矩形
          ctx.clearRect(0, 0, 422, 422)
          // strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
          ctx.strokeStyle = '#FFBE04'
          // font 属性设置或返回画布上文本内容的当前字体属性
          ctx.font = '16px Microsoft YaHei'
          for (var i = 0; i < this.turnplate.restaraunts.length; i++) {
            var angle = this.turnplate.startAngle + i * arc
            ctx.fillStyle = this.turnplate.colors[i]
            ctx.beginPath()
            //  arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）
            ctx.arc(211, 211, this.turnplate.outsideRadius, angle, angle + arc, false)
            ctx.arc(211, 211, this.turnplate.insideRadius, angle + arc, angle, true)
            ctx.stroke()
            ctx.fill()
            // 锁画布(为了保存之前的画布状态)
            ctx.save()

            // ----绘制奖品开始----
            ctx.fillStyle = '#E5302F'
            var text = this.turnplate.restaraunts[i]
            var lineHeight = 17
            // translate方法重新映射画布上的 (0,0) 位置
            ctx.translate(211 + Math.cos(angle + arc / 2) * this.turnplate.textRadius, 211 + Math.sin(angle + arc / 2) * this.turnplate.textRadius)

            // rotate方法旋转当前的绘图
            ctx.rotate(angle + arc / 2 + Math.PI / 2)

            /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
            if (text.indexOf('M') > 0) { // 流量包
              var texts = text.split('M')
              for (var j = 0; j < texts.length; j++) {
                ctx.font = j === 0 ? 'bold 20px Microsoft YaHei' : '16px Microsoft YaHei'
                if (j === 0) {
                  ctx.fillText(texts[j] + 'M', -ctx.measureText(texts[j] + 'M').width / 2, j * lineHeight)
                } else {
                  ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * lineHeight)
                }
              }
            } else if (text.indexOf('M') === -1 && text.length > 6) { // 奖品名称长度超过一定范围
              text = text.substring(0, 6) + '||' + text.substring(6)
              var textst = text.split('||')
              for (var ji = 0; ji < textst.length; ji++) {
                ctx.fillText(textst[ji], -ctx.measureText(textst[ji]).width / 2, ji * lineHeight)
              }
            } else {
              // 在画布上绘制填色的文本。文本的默认颜色是黑色
              // measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
              ctx.fillText(text, -ctx.measureText(text).width / 2, 0)
            }

            // 添加对应图标
            if (text.indexOf('Q币') > 0) {
              var img = document.getElementById('shan-img')
              img.onload = function () {
                // ctx.drawImage(img, -15, 10) //本来第一次加载大转盘抽奖就会出现奖品图片，但是有点瑕疵没有解决所以注释了，现在第二次加载就会出现，
                //谁解决了来说下，帮助大家
              }
              ctx.drawImage(img, -15, 10)
            } else if (text.indexOf('谢谢参与') >= 0) {
              img = document.getElementById('sorry-img')
              img.onload = function () {
                // ctx.drawImage(img, -15, 10) //本来第一次加载大转盘抽奖就会出现奖品图片，但是有点瑕疵没有解决所以注释了，现在第二次加载就会出现，
                //谁解决了来说下，帮助大家
              }
              ctx.drawImage(img, -15, 10)
            }
            // 把当前画布返回（调整）到上一个save()状态之前
            ctx.restore()
            // 绘制奖品结束
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .awardRotate {
    height: 100%;
    max-width: 375px;
    margin: 0px auto;
    .clear {
      clear: both;
    }

    /* 大转盘样式 */
    .banner {
      display: block;
      width: 95%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
      padding-top: 120px;
    }

    .banner .turnplate {
      display: block;
      width: 100%;
      position: relative;
      background-image: url(../assets/img/3.png);
      background-size: 100% 100%;
    }

    .banner .turnplate canvas.item {
      width: 100%;
    }

    .banner .turnplate img.pointer {
      position: absolute;
      width: 31.5%;
      height: 42.5%;
      left: 34.6%;
      top: 23%;
    }
  }


</style>
