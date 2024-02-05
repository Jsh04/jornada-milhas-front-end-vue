import DescriptionVue from "@/components/pages/Description.vue";
import DestinyRegisterVue from "@/components/pages/DestinyRegister/DestinyRegister.vue";
import DestinyPageVue from "@/components/pages/DestinysPage/DestinyPage.vue";
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
            },
            {
                path: 'destino',
                component: DestinyPageVue,
            },
            {
                path: "destino/cadastro",
                component: DestinyRegisterVue
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;