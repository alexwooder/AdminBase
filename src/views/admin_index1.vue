<style scoped>
   .fade-enter-active {
	 /* animation-delay: 0.25s; */
     /* animation: bounce-in 1s; */
	 transition: all .5s ease;
   }
   .fade-leave-active {
     /* animation: bounce-out 1s; */
		transition: all .2s ease;
   }
   .fade-enter, .fade-leave-to
   /* .slide-fade-leave-active for below version 2.1.8 */ {
     opacity: 0;
   }
   @keyframes bounce-in {
	   /* 0% {
	      transform:translateX(-100%);
	    }
	    50% {
	      transform:translateX(-50%);
	    }
	    100% {
	     transform:translateX(0%);
	    } 
		from {transform:translateY(-100%);}
		to {transform:translateY(0%);}*/
		
	}
	@keyframes bounce-out {
		
		/* from {transform:translateY(0%);} 
		to {transform:translateY(100%);}*/
		  /* 0% {
			  transform:translateX(0%);
			}
			50% {
			  transform:translateX(50%);
			}
			100% {
			 transform:translateX(100%);
		} */
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
					<li v-for="item in menus">
						<section @click="route_to(item.path,'欢迎页')">{{item.meta.name}}</section>
					</li>
					
				</ul>
			</aside>
			<article>
				<nav>
					{{current_path}}
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
                changePassModal:false,
				menus:[],
				current_path:"当前位置",
				routers : []
            };
        },
        computed:{
          
        },
        mounted(){
			let key = "/admin_index1";
			this.menus = this.$router.options.routes.filter((item)=>{
			return item.path === key;
		 });
		 this.menus = this.menus[0]["children"];
		 
		 console.log(this.menus);
        },
        methods:{
			route_to(url,params){
				this.$router.push(url);
				this.current_path = params;
			}
        }
    }
</script>
