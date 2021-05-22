import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import alltodo from '@/views/alltodos.vue'
import completedtodo from '@/components/completedtodo.vue'
import toBeDoneTodo from '@/components/toBeDoneTodo.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/all',
    name: 'all',
    component: alltodo
}, {
    path: '/completed',
    name: 'completedtodo',
    component: completedtodo
}, {
    path: '/toBeDone',
    name: 'toBeDoneTodo',
    component: toBeDoneTodo
}, ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router