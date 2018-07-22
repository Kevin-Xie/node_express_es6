<template>
    <div>
    	<div v-if="isLogin">
    		<i class="">{{userName}}</i>
    	</div>
    	<div v-else>
    		<el-button @click="showLoginForm">Login | Register</el-button>
    		<v-login v-if="loginFormVisible" @closeLoginForm="closeLoginForm"></v-login>
    	</div>
    </div>
    
</template>

<<script>
import VLogin from '../../login/login'	
export default {
  name: 'userInfo',
  data() {
    return {
    	loginFormVisible: false,
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
  	}
  }
}
</script>

<<style scoped>

</style>

