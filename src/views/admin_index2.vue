<style scoped>
   .fade-enter-active {
     animation: bounce-in1 .5s;
   }
   .fade-leave-active {
     animation: bounce-in1 .5s reverse;
   }
   @keyframes bounce-in {
     0% {
       transform: scale(0);
     }
     50% {
       transform: scale(1.5);
     }
     100% {
       transform: scale(1);
     }
   }
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
				<transition name="fade">
					<router-view></router-view>
				</transition>
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
          //this.$router.push("/welcome")  ;
        },
        methods:{

        }
    }
</script>
