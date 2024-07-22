
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { StateDepoiment, depoimentModule } from "./modules/DepoimentModule";
import { StateUser, user } from "./modules/UserModule";
import { LoginModule, StateLogin } from "./modules/LoginModule";
import { DestinyModule, StateDestination } from "./modules/DestinyModule";


export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
    destinyModule: StateDestination;
    depoimentModule: StateDepoiment;
    userStateModule: StateUser,
    loginStateModule: StateLogin,
}

export const store = createStore<State>({
    modules:{
        depoimentModule, 
        userStateModule: user, 
        loginStateModule: LoginModule, 
        destinyModule: DestinyModule,
    },
})


export function useStore(): Store<State> {
    return vuexUseStore(key)
}