<template>
  <div class="wrapper">
    <el-form>
      <el-form-item>
        <el-input placeholder="手机号/邮箱/用户名" v-model="loginId"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="密码" v-model="password"><el-switch slot="append"></el-switch></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doSignIn">登录</el-button>
        <el-button v-show="false" @click="doSignUp">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: 'signin',
  data () {
    return {
      loginId: '',
      password: '',

    }
  },
  methods: {
    doSignIn() {
      console.log(this.loginId, this.password);
      this.changeLoginStatus();
      if(this.signin)
        this.$router.push('/home')
    },
    doSignUp() {

    },
    ...mapMutations([
        'changeLoginStatus'
      ])
  },
  computed: {
    signin() {
      return this.$store.state.signin;
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
