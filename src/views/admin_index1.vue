<style scoped>
   .fade-enter-active {
     animation: bounce-in 2s;
   }
   .fade-leave-active {
     animation: bounce-out 2s;
   }
   @keyframes bounce-in {
	   0% {
	      transform:translateX(-100%);
	    }
	    50% {
	      transform:translateX(-50%);
	    }
	    100% {
	     transform:translateX(0%);
	    }
		@keyframes bounce-out {
			   0% {
			      transform:translateX(0%);
			    }
			    50% {
			      transform:translateX(50%);
			    }
			    100% {
			     transform:translateX(100%);
		}
    /* 0% {
       transform: scale(0);
     }
     50% {
       transform: scale(1.5);
     }
     100% {
       transform: scale(1);
     }*/
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
				<ul>
					<li>
						<section @click="route_to('/welcome')">333</section>
					</li>
					<li>
						<section @click="route_to('/animation')">admin_index22</section>
					</li>
					
				</ul>
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
   import Routers from '../router';

    export default {
        data(){
           
            return{
                changePassModal:false,
				menus:[]
            };
        },
        computed:{
          
        },
        mounted(){
			let key = this.$route.fullPath;
			this.menus = this.$router.options.routes.filter((item)=>{
			return item.path === key;
		 });
		 console.log(this.menus);
        },
        methods:{
			route_to(url,params){
				this.$router.push(url);
			}
        }
    }
</script>
