import DescriptionVue from "@/components/pages/Description.vue";
import Home from "@/components/pages/Home.vue";
import RegisterVue from "@/components/pages/Register/Register.vue";
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
    {
        path: '/cadastro',
        component: RegisterVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;