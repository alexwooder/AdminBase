<style scoped>
   
</style>
<template>
    <div class="index-main">
		<header>
			<div></div>
			<ul>
				<li>消息</li>
				<li></li>
				<li>Alex Wooder</li>
			</ul>
		</header>
		<main>
			<aside>
					<section>菜单</section>
				导航
			</aside>
			<article>
				<nav>
					当前位置
				</nav>
				<router-view></router-view>
				<footer>页脚</footer>
			</article>
		</main>
    </div>
</template>
<script>
   
    export default {
        data(){
           
            return{
                changePassModal:false
              
            };
        },
        computed:{
          
        },
        mounted(){
          this.$router.push("/welcome")  ;
        },
        methods:{

        }
    }
</script>
