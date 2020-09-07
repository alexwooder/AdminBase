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
        name:"index",
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
        path: '/category',
        name:"index",
        component: (resolve) => require(['./views/mall/category'], resolve),
        children:[
                   ]
},
{
        path: '/admin_index2',
        name:"index",
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