<template>
  <el-dialog :visible.sync="isShowLoginForm" @close="closeLoginForm">
    <el-button @click="showLogin = !showLogin">change</el-button>
    <el-form :model="basicInfo" status-icon :rules="rules" ref="loginForm" v-if="showLogin">
      <el-form-item prop="userName">
        <el-input placeholder="Mobile | Email | UserName" v-model="basicInfo.userName"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="Password" v-model="basicInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('loginForm')">Login</el-button>
        <el-button @click="resetForm('loginForm')">Reset</el-button>
      </el-form-item>
    </el-form>
    <el-form :model="basicInfo" status-icon :rules="rules" ref="registerForm" v-else>
      <el-form-item prop="userName">
        <el-input placeholder="Mobile | Email | UserName" v-model="basicInfo.userName"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="Password" v-model="basicInfo.password"></el-input>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <el-input type="password" placeholder="Confirm password" v-model="basicInfo.confirmPassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitForm('registerForm')">Register</el-button>
        <el-button @click="resetForm('registerForm')">Reset</el-button>
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
    let validateUserName = (rule, value, callback) => {
      if(!value) {
        callback(new Error("UserName should not be empty"));
      } else {
        callback();
      }
    }
    let validatePassword = (rule, value, callback) => {
      if(!value) {
        callback(new Error("Password should not be empty"));
      } else {
        callback();
      }
    }
    return {
      isShowLoginForm: true,
      showLogin: true,
      basicInfo: {
        userName: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( valid => {
        if(valid && formName === 'loginForm') {
          this.doLogin();
        }
      })
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    doLogin() {
      login(this.basicInfo.userName, this.basicInfo.password)
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
      register(this.basicInfo.userName, this.basicInfo.password)
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
