<template>
  <el-dialog :visible.sync="isShowLoginForm" @close="closeLoginForm">
    <el-form>
      <el-form-item>
        <el-input placeholder="手机号/邮箱/用户名" v-model="userName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="密码" v-model="password"><el-switch slot="append"></el-switch></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doLogin">登录</el-button>
        <el-button @click="doRegister">注册</el-button>
      </el-form-item>
    </el-form>
   </el-dialog> 
</template>

<script>
import {mapMutations} from 'vuex';
import {login, register} from '../../api';
import { errorTip, successTip } from '@/components/common/message'

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      isShowLoginForm: true
    }
  },
  methods: {
    doLogin() {
      login(this.userName, this.password)
      .then(user => {
        this.userOnline(user)  //change login status after login successfully
        successTip('Login successfully');
      })
      .catch(err => {
        console.log(err);
        errorTip('Backend server error, please try it again.');
      })
    },
    doRegister() {
      register(this.userName, this.password)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    },
    ...mapMutations([
        'userOnline'
      ]),
    closeLoginForm() {
      this.$emit('closeLoginForm');
    },
  },

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
