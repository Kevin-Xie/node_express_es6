<template>
	<div>
		<el-row>
			<el-col :span=2>
				<slot name="logo"></slot>
			</el-col>
			<el-col :span=20>
				<slot name="menubar"></slot>
			</el-col>
			<el-col :span=2>
				<slot name="userInfo"></slot>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'head',
	data() {
		return {

		}
	},
	methods: {
	}
}
</script>

<style>
	
</style>