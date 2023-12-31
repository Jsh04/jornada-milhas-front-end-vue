import DescriptionVue from "@/components/pages/Description.vue";
import Home from "@/components/pages/Home.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/descricao/:id',
        component: DescriptionVue
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;