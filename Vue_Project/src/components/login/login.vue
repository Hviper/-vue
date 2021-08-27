<template>
  <div id="app">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item
        label="账号"
        prop="username"
        :rules="[{ required: true, message: '账号不能为空' }]"
      >
        <el-input v-model.number="form.username"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[{ required: true, message: '密码不能为空' }]"
      >
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')" type="danger">重置</el-button>
        <el-button type="warning" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import httpRequest from "@/networks";

export default {
  name: "login",

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  // mounted() {
  //   let token = window.sessionStorage.getItem("token");
  //   if (token) {
  //     if (
  //       utils.isEquals(JSON.parse(token), )
  //     ) {
  //       this.$router.push("/home");
  //     }
  //   }
  // },
  methods: {
     submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {

          const {data: res} = await httpRequest({
            url: "login",
            data: this.form,
            method: "POST"
          });
          if (res.code == -1) {
            this.$message("请输入正确的用户名和密码！");
          } else if(res.code == 1){
            this.$message({
              message: "恭喜你，登录成功",
              type: "success",
            });
            window.sessionStorage.setItem("token", JSON.stringify(res.token));
            this.$router.push("/home");
          }
        } else {
          this.$message("请输入正确的用户名和密码！");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    register() {
      this.$router.push("/register");
    }
  },
};
</script>

<style scoped>
#app {
  /* 子定位flex布局 */
  display: flex;
  justify-content: center;
  align-items: center;

  /* 自己的定位 位于全窗口左右居中，上200px*/
  width: 400px;
  height: 280px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
  background-color: #fff;
}
</style>
