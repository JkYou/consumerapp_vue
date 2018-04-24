<template>
  <div>
      <header>
          <router-link to="/">
          <i class="icon iconfont icon-xiangzuojiantou"></i>
          </router-link>
      </header>
      <div class="loginform">
          <h3>我要吐槽</h3>	
			<!-- <div class="inputbox">
				<label class="label">联系方式：</label>
				<input type="text" v-model="username" name="username" placeholder="手机号/微信号/QQ号">
			</div> -->
			 <textarea  placeholder="我们力求向您提供优质、高效的服务，期待您的宝贵建议！" id="textBox" v-model="message" rows="4"></textarea>
			<div class="button">
				<button class="login" @click="submit">提交</button>
			</div>
		</div>
  </div>
</template>
<script>
import {Toast,MessageBox} from "mint-ui"
export default {
  name: "commontpage",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    submit() {
        if(this.message.length<10){
            Toast("您输入的内容太敷衍哦！");
            return;
        }else{
          MessageBox("美券","我们已收到您的反馈，如被采纳将有精美礼品哦！");
        }
        
    }
  }
};
</script>
<style lang="less" scoped>
header {
  width: 10rem;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  color: #ffffff;
  background: #cc0244;
  padding-left: 10px;
  position: relative;
  i {
    color: #ffffff;
  }
}
.loginform {
  display: block;
  margin: 30px auto;
  h3{
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 50px;
  }
}
.inputbox {
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 50px;
  display: flex;
  padding: 10px 10px;
  box-sizing: border-box;
}
.inputbox .label {
  width: 100px;
  font-size: 14px;
  font-weight: 600;
}
.inputbox input {
  border: none;
  outline: none;
  font-size: 13px;
  color: #666;
}
.button {
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  text-align: center;
}
.button .login {
  margin: 30px auto;
  width: 80%;
  height: 40px;
  background-color: #cc0244;
  outline: none;
  border: none;
  font-size: 16px;
  color: #fff;
  letter-spacing: 4px;
}

 textarea {
  width: 10rem;
  height: 114px;
  border: 1px solid #f1f1f1;
  border-radius: 15px;
  margin-top: 10px;
  font-size: 13px;
  color: #aaa;
  padding: 10px;
}
</style>


