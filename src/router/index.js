import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import completedtodo from '@/views/completed.vue'
import toBeDoneTodo from '@/views/tobedone.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
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