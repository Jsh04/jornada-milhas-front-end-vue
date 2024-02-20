import DescriptionVue from "@/components/pages/Description.vue";
import DestinyEditVue from "@/components/pages/DestinyEdit/DestinyEdit.vue";
import DestinyRegisterVue from "@/components/pages/DestinyRegister/DestinyRegister.vue";
import DestinyTableVue from "@/components/pages/DestinyTable.vue";
import DestinyPageVue from "@/components/pages/DestinysPage/DestinyPage.vue";
import Home from "@/components/pages/Home.vue";
import LoginVue from "@/components/pages/Login.vue";
import RegisterVue from "@/components/pages/Register/Register.vue";
import RegisterAdminVue from "@/components/pages/RegisterAdmin/RegisterAdmin.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthorizationRoutes from "./AuthorizationRoutes";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
        meta: { requiresAuth: false }
    },
    {
        path: '/descricao/:id',
        component: DescriptionVue,
        meta: { requiresAuth: false }
    },
    {
        path: '/cadastro',
        component: RegisterVue,
        meta: { requiresAuth: false }
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
                component: RegisterAdminVue,
                meta: { requiresAuth: false } 
            },
            {
                path: 'destino',
                component: DestinyPageVue,
                meta: { requiresAuth: true, roles: [2] },
            },
            {
                path: "destino/cadastro",
                component: DestinyRegisterVue,
                meta: { requiresAuth: true, roles: [2] },
            },
            {
                path: "destino/listar-destino",
                component: DestinyTableVue,
                meta: { requiresAuth: true, roles: [2] },
            },
            {
                path: "destino/editar/:id",
                component: DestinyEditVue,
                meta: { requiresAuth: true, roles: [2] },
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

AuthorizationRoutes(router);

export default router;