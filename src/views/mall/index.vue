<template>
	<div class="mall-index-main">
		<div class="mall-index-body">
			<router-view>
				
			</router-view>
		</div>
		<footer class="mall-index-footer">
			<ul>
				<li><router-link to="/index_list">首页</router-link></li>
				<li><router-link to="/category">分类</router-link></li>
				<li><router-link to="/car">购物车</router-link></li>
				<li><router-link to="/me">我</router-link></li>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default{
		mounted() {
			this.$router.push("/index_list");
		}
	}
</script>

<style>
</style>
