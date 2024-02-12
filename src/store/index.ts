
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { StateDepoiment, depoiment } from "./modules/DepoimentModule";
import { StateUser, user } from "./modules/UserModule";
import User from "@/models/User";
import { LoginModule, StateLogin } from "./modules/LoginModule";
import Login from "@/models/Login";
import { DestinyModule, StateDestination } from "./modules/DestinyModule";
import Destination from "@/models/Destination";


export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
    destinyModule: StateDestination;
    depoimentModule: StateDepoiment;
    userStateModule: StateUser,
    loginStateModule: StateLogin,
}

export const store = createStore<State>({
    modules:{
        depoimentModule: depoiment, 
        userStateModule: user, 
        loginStateModule: LoginModule, 
        destinyModule: DestinyModule,
    },
})


export function useStore(): Store<State> {
    return vuexUseStore(key)
}