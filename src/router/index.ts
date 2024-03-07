
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthorizationRoutes from "./AuthorizationRoutes";
import Home from "@/views/Home.vue";
import RegisterVue from "@/views/Register/Register.vue";
import DescriptionVue from "@/views/Description.vue";
import LoginVue from "@/views/Login.vue";
import About from "@/views/AboutJornadaMilhas/About.vue";
import RegisterAdminVue from "@/views/RegisterAdmin/RegisterAdmin.vue";
import DestinyPageVue from "@/views/DestinysPage/DestinyPage.vue";
import DestinyRegisterVue from "@/views/DestinyRegister/DestinyRegister.vue";
import DestinyTableVue from "@/views/DestinyTable.vue";
import DestinyEditVue from "@/views/DestinyEdit/DestinyEdit.vue";

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
        path: "/about",
        component: About,
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

// AuthorizationRoutes(router);

export default router;