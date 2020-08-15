const routers = [
{
        path: '/',
        name:"index",
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            {path: '/welcome',component: (resolve) => require(['./views/welcome.vue'], resolve)}
            
        ]
}
];
export default routers;