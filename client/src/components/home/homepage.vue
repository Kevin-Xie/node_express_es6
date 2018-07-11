<template>
	<div>
		<v-head>
			<img src="../../assets/logo.png" slot="logo" style="width: 50%;">
			<v-menubar slot="menubar"></v-menubar>
		</v-head>
		<div>
			<router-view/>
		</div>
	</div>
</template>

<script>
import VHead from '../common/layout/head'
import VMenubar from '../common/layout/menubar'
import {mapState} from 'vuex';

export default {
	name: 'homepage',
	data() {
		return {

		}
	},
	components: {
		VHead, VMenubar
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
		this.checkLogin();
	}
}
</script>

<style>
	
</style>