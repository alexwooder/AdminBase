<template>
	<div class="main">
		<router-link to="/admin_index1">管理界面1</router-link>
		<router-link to="/mall_index">手机商城</router-link>
		<router-link to="./admin_index2">管理界面2</router-link>
		<router-link to="./app_index1">APP界面</router-link>
		<router-link to="./dashboard1">dashboard1</router-link>
		
	</div>
	
</template>

<script>
	import axios from 'axios'; 
	export default{
		data(){
			return {
				HTTP : null
			}
		},
		mounted(){
			document.cookie="JSESSIONID=358DC9B6AA191B5D5F61C79B4084299D";
			this.HTTP = axios.create({  //自定义请求
			    baseURL:'http://127.0.0.1:8081/bp/',
			    timeout: 1000000,
			    responseType:'json',
			    headers:{
			        'custome-header': 'miaov',
			        'content-type':'application/json'
			    }
			})
		},
		methods:{
			
		}
	}
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
