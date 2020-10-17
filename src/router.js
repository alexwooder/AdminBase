const routers = [
{
        path: '/',
        name:"index",
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            
        ]
},
{
        path: '/admin_index1',
        name:"index1",
        component: (resolve) => require(['./views/admin_index1.vue'], resolve),
        children:[
            {path: '/welcome',meta:{"name":"欢迎页"},component: (resolve) => require(['./views/welcome.vue'], resolve)},
			{path: '/css3text',meta:{"name":"css3文本"},component: (resolve) => require(['./views/CSS3_Text.vue'], resolve)},
			{path: '/css3float',meta:{"name":"css3浮动"},component: (resolve) => require(['./views/CSS3_Float.vue'], resolve)},
			{path: '/css3grid',meta:{"name":"css3栅格"},component: (resolve) => require(['./views/CSS3_Grid.vue'], resolve)},
			{path: '/animation',meta:{"name":"css3动画"},component: (resolve) => require(['./views/animation.vue'], resolve)}
        ]
},
{
        path: '/mall_index',
        name:"index2",
        component: (resolve) => require(['./views/mall/index'], resolve),
        children:[
			{path: '/index_list',meta:{"name":"首页"},component: (resolve) => require(['./views/mall/index_list'], resolve)},
			{path: '/category',meta:{"name":"分类"},component: (resolve) => require(['./views/mall/category'], resolve)},
			{path: '/car',meta:{"name":"购物车"},component: (resolve) => require(['./views/mall/car'], resolve)},
			{path: '/me',meta:{"name":"我"},component: (resolve) => require(['./views/mall/me'], resolve)},
                   ]
},
{
        path: '/admin_index2',
        name:"index3",
        component: (resolve) => require(['./views/admin_index2.vue'], resolve),
        children:[
            
            
        ]
},
{
        path: '/app_index',
        name:"index",
        component: (resolve) => require(['./views/app_index.vue'], resolve),
        children:[
            
            
        ]
}
];
export default routers;