const routers = [
{
        path: '/',
        name:"index",
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            {path: '/welcome',component: (resolve) => require(['./views/welcome.vue'], resolve)}
            
        ]
},
{
        path: '/admin_index1',
        name:"index",
        component: (resolve) => require(['./views/admin_index1.vue'], resolve),
        children:[
            {path: '/welcome',component: (resolve) => require(['./views/welcome.vue'], resolve)}
            
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