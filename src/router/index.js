import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home/index.vue';
import NotFound from '@/views/NotFound/index.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/files',
            component: () => import('@/views/Files/index.vue')
        },
        {
            path: '/message',
            component: () => import('@/views/Message/index.vue')
        },
        {
            path: '/tags',
            component: () => import('@/views/Tags/index.vue')
        },
        {
            path: '/portfolio',
            component: () => import('@/views/Portfolio/index.vue')
        },
        {
            path: '/article',
            component: () => import('@/views/Articles/index.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound
        }
    ]
})

export default router;