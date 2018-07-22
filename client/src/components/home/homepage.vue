<template>
	<div>
		<v-head>
			<img src="../../assets/logo.png" slot="logo" style="width: 50%;">
			<v-menubar slot="menubar"></v-menubar>
			<v-user-info slot="userInfo"></v-user-info>
		</v-head>
		<div>
			<router-view/>
		</div>
	</div>
</template>

<script>
import VHead from '../common/layout/head';
import VMenubar from '../common/layout/menubar';
import VUserInfo from '../common/layout/userInfo';
import {mapState} from 'vuex';

export default {
	name: 'homepage',
	data () {
		return {

		}
	},
	components: {
		VHead, VMenubar, VUserInfo
	},
	methods: {
		checkLogin() {
			if(!this.login) {
				this.$router.push({ path: '/login' })
			}
		}
	},
	computed: {
		...mapState({
			login: state => state.login,
		})
	},
	mounted() {

	}
}
</script>

<style>
	
</style>