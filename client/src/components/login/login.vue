<template>
  <div class="wrapper">
    <el-form>
      <el-form-item>
        <el-input placeholder="手机号/邮箱/用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="密码"><el-switch slot="append"></el-switch></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-form {


}
.wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>
