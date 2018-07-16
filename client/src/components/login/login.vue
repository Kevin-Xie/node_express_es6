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
        <el-button @click="doLogin">登录</el-button>
        <el-button v-show="false" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import {getUserList} from '../../api/user';

export default {
  name: 'login',
  data () {
    return {
      loginId: '',
      password: '',

    }
  },
  methods: {
    doLogin() {
      console.log(this.loginId, this.password);
      getUserList()
      .then(data => console.log(data))
      .catch(err => console.log(err))
      // this.changeLoginStatus();
      // if(this.login)
      //   this.$router.push('/home')
    },
    register() {

    },
    ...mapMutations([
        'changeLoginStatus'
      ])
  },
  computed: {
    login() {
      return this.$store.state.login;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    position: absolute;
    top: 35%;
    left: 35%;
}
</style>
