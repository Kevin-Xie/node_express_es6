<template>
  <el-dialog :visible.sync="isShowLoginForm" @close="closeLoginForm" width='25%'>
      <!-- <h1 slot="title">Login</h1> -->
    <el-form :model="basicInfo" status-icon :rules="rules" ref="loginForm" v-if="showLogin">
      <h1>Login</h1>
      <el-form-item prop="userName">
        <el-input placeholder="Mobile | Email | UserName" v-model="basicInfo.userName"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="Password" v-model="basicInfo.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">Login</el-button>
      </el-form-item>
      <el-form-item>
        <span class="pointer" @click="switchForm">Register</span>
        <span> | </span>
        <span class="pointer">Forget password</span>
      </el-form-item>
    </el-form>
    <el-form :model="basicInfo" status-icon :rules="rules" ref="registerForm" v-else>
      <h1>Register</h1>
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
        <el-button type="primary" @click="submitForm('registerForm')">Register</el-button>
      </el-form-item>
      <el-form-item>
        <span class="pointer" @click="switchForm">Go login</span>
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
        } else {
          this.doRegister();
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
        errorTip(err.message);
      })
    },

    doRegister() {
      register(this.basicInfo.userName, this.basicInfo.password)
      .then(user => {
          this.userOnline(user);
          successTip('Register and login successfully');
        })
      .catch(err => {
        errorTip(err.message);
      });
    },

    ...mapMutations([
        'userOnline'
      ]),

    closeLoginForm() {
      this.$emit('closeLoginForm');
    },
    switchForm() {
      this.showLogin = !this.showLogin;
    }
  },

  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  text-decoration: underline;
}
.pointer {
  cursor: pointer;
}
button {
  width: 100%;
}
</style>
