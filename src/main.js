import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import App from './app.vue';
import Axios from 'axios'
import './resources/styles/main.css';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Axios)
// 路由配置
const RouterConfig = {
 //   mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
   // Util.title(to.meta.title);
 next();
  
});

router.afterEach(() => {
    window.scrollTo(0, 0);

    
});


/*const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});*/


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});