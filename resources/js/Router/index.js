import VueRouter from 'vue-router';


const router = new VueRouter({
    mode: 'history',
    routes:  [
        {
            path: '/',
            component: () => import('../components/AlbomTable.vue'),
            name: 'albom'
        },
    ],
})

export default router;
