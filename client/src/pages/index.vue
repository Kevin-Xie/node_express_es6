<template>
	<div>
		<div>Main Page Here</div>
		<div>
			<router-view/>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';

export default {
	name: 'index',
	data() {
		return {

		}
	},
	methods: {
		checkLogin() {
			if(!this.signin) {
				this.$router.push({ path: '/signin' })
			}
		}
	},
	computed: {
		...mapState({
			signin: state => state.signin,
		})
	},
	mounted() {
		this.checkLogin();
	}
}
</script>

<style>
	
</style>