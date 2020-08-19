<template>
	<div class="main">
		<router-link to="./admin_index1">管理界面1</router-link>
		<router-link to="./admin_index2">管理界面2</router-link>
		<router-link to="./app_index1">APP界面</router-link>
	</div>
	
</template>

<script>
</script>

<style scoped>
	.main{
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	
	.main a{
		text-decoration: none;
		border: var(--color-white) 1px solid;
		font-size: 20px;
		padding: 10px;
		border-radius: 10px;
		
		margin:15px;
	}
	
	.main a:hover{
		transform: scale(1.1);
	}
</style>
