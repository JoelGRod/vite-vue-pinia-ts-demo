import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// Pages
import HomePage from "../counter/pages/HomePage.vue"
import CounterPage from "../counter/pages/CounterPage.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;