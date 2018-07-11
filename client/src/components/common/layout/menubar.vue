<template>
	<div>
		<el-menu :default-active="$route.path" 
				class="el-menue-demo" 
				mode="horizontal"
				@select="handleSelect"
				router>
			<el-menu-item index="/">Home</el-menu-item>
			<el-menu-item index="/helloworld">helloworld</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'menubar',
	data() {
		return {
		}
	},
	methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
	.el-header {
		background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	    top: 0;
	    left: 0;
	    width: 100%;
	    position: relative;
	}
</style>