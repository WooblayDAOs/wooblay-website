import { createRouter, createWebHistory } from 'vue-router'
import Docs from './Docs.vue' // adjust the path as needed
import Homepage from './Homepage.vue' // adjust the path as needed
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Homepage
        },
        {
            path: '/docs',
            component: Docs
        },
        // other routes...
    ]
})

export default router