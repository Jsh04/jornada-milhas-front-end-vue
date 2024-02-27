
import { useStore } from "@/store";
import { Router } from "vue-router";

export default (router: Router) => {
    router.beforeEach((to, from, next) => {
        const store = useStore()
        const storeLogin = store.state.loginStateModule;

        if(storeLogin.User.userRole == 1 && to.meta.requiresAuth && storeLogin.token == ''){
            next("/login")
        }else if(to.meta.requiresAuth && storeLogin.token == ''){
            next("/login")
        }else
            next()
    })
}