import DescriptionVue from "@/components/pages/Description.vue";
import Home from "@/components/pages/Home.vue";
import LoginVue from "@/components/pages/Login.vue";
import RegisterVue from "@/components/pages/Register/Register.vue";
import RegisterAdminVue from "@/components/pages/RegisterAdmin/RegisterAdmin.vue";
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
    },
    {
        path: '/login',
        component: LoginVue,
        meta: { requiresAuth: false }
    },
    {
        path: '/admin',
        children: [
            {
                path: 'cadastro',
                component: RegisterAdminVue
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;