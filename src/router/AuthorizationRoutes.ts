
import {  store, useStore } from "@/store";
import { Router } from "vue-router";



export default (router: Router) => {
    router.beforeEach((to, from, next) => {
        const storeLogin = store.state.loginStateModule;
        if(storeLogin.User.UserRole == 1 && to.meta.requiresAuth && storeLogin.token == ''){
            next("/login")
        }else if(to.meta.requiresAuth && storeLogin.token == ''){
            next("/login")
        }else
            next()
    })
}