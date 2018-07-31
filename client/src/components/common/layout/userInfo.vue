<template>
  <div>
  	<div v-if="isLogin">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  	</div>
  	<div v-else>
  		<span class="pointer" @click="showLoginForm">Login | Register</span>
  		<v-login v-if="loginFormVisible" @closeLoginForm="closeLoginForm"></v-login>
  	</div>
  </div>
</template>

<script>
import VLogin from '../../login/login';
import {successTip} from '../message';
import {logout}	from '../../../api';
import { mapMutations } from 'vuex';

export default {
  name: 'userInfo',
  data() {
    return {
    	loginFormVisible: false,
      api: {
        logout
      },
      uiHandle: {
        logout: this.handleLogoutUI
      }
    }
  },
  components: {
  	VLogin,
  },
  computed: {
      isLogin() {
      	return this.$store.state.login;
      },
      userName() {
      	return this.$store.state.user.userName;
      }
  },
  methods: {
  	showLoginForm() {
  		this.loginFormVisible = true;
  	},
  	closeLoginForm() {
  		this.loginFormVisible = false;
    },
    handleLogoutUI() {
      this.userOffline();
      this.closeLoginForm();
      successTip("Logout Successfully");
    },
    handleCommand(command) {
      this.api[command]().then(this.uiHandle[command]);
    },
    ...mapMutations([
      'userOffline'
    ])
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>

