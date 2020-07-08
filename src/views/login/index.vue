<template>
  <div>
    <div class="title">智慧停车</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="登录名"
        placeholder="请输入您的登录名"
        :rules="[{ required: true, message: '请填写登录名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入您的密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="forgetthepassword">忘记密码？</div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { GetUserLogin } from "../../utils/api";
import { mapMutations } from 'vuex';
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      userToken: ""
    };
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    onSubmit() {
      this.GetUserLogin();
      this.$router.push("/home");

    },
    GetUserLogin() {
      GetUserLogin({
        username: this.username,
        password: this.password
      })
        .then(res => {
          if(res.code==="10000")
          this.userToken = res.data.token;
          this.changeLogin({ userToken: this.userToken });
          Toast('登录成功');
          //localStorage.setItem("userToken", this.userToken);
          
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.title {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  margin-top: 200px;
}
.forgetthepassword {
  margin-top: 10px;
  margin-right: 20px;
  font-size: 16px;
  text-align: right;
}
/deep/.van-form {
  margin-top: 20px;
}
</style>