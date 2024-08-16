

import UserLimited from "@/domain/entities/users/UserLimited";
import { useStore } from "@/store";
import { Router } from "vue-router";

export default (router: Router) => {
    // router.beforeEach((to, from, next) => {
    //     const store = useStore()
    //     const storeLogin = ;

    //     if(storeLogin.User instanceof UserLimited && to.meta.requiresAuth && storeLogin.token == ''){
    //         next("/login")
    //     }else if(to.meta.requiresAuth && storeLogin.token == ''){
    //         next("/login")
    //     }else
    //         next()
    // })
}