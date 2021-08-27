<template>
  <div class="content">
    <el-form :model="ruleForm" :rules="formVall" ref="registerRef">
      <el-form-item prop="user">
        <el-input
          v-model="ruleForm.user"
          prefix-icon="iconfont icon-user"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="ruleForm.pwd"
          type="password"
          show-password
          placeholder="密码"
          prefix-icon="iconfont icon-mimacopy"
        ></el-input>
      </el-form-item>
      <el-form-item prop="cpwd">
        <el-input
          v-model="ruleForm.cpwd"
          type="password"
          show-password
          placeholder="确认密码"
          prefix-icon="iconfont icon-mimacopy"
        ></el-input>
      </el-form-item>
      <el-form-item>
         
        <el-button type="primary" @click="register()">注册</el-button>
        <router-link
          type="warning"
          tag="button"
          to="/login"
          class="el-button el-button--warning"
          >
          去登录
          </router-link
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import httpRequest from "@/networks";

export default {
  data() {
    var confirmpwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else if (value != this.ruleForm.pwd) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: { user: "", cpwd: "", pwd: "" },
      formVall: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            required: true,
            max: 10,
            min: 6,
            message: "用户名长度不正确",
            trigger: "blur",
          },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            required: true,
            max: 18,
            min: 6,
            message: "密码长度不正确",
            trigger: "blur",
          },
        ],
        cpwd: [{ required: true, validator: confirmpwd, trigger: "blur" }],
      },
    };
  },

  methods: {
    register() {
      this.$refs.registerRef.validate(async (valid) => {
        if (!valid) {
          return;
        }
        const { data: res } = await httpRequest({
          url: "regs",
          method: "POST",
          data: this.ruleForm,
        });
        if (res.code == -1) {
          return this.$message.error("注册失败，用户名已存在");
        }
        this.$message.success("注册成功，返回登录");
        setTimeout(() => {
          this.$router.push("/login");
        }, 3000);
      });
    },
  },
};
</script>

<style scoped>
.content {
  width: 400px;
  height: 280px;
  border-radius: 10px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  padding: 0px 15px;
}
.el-form-item {
  margin: 25px auto;
  text-align: center;
}
</style>