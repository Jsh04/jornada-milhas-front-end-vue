
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { StateDepoiment, DepoimentModule } from "./modules/DepoimentModule";
import { StateUser, UserModule } from "./modules/UserModule";
import { DestinyModule, StateDestination } from "./modules/DestinyModule";

export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
    DestinyModule: StateDestination;
    DepoimentModule: StateDepoiment;
    UserStateModule: StateUser,
}

export const store = createStore<State>({
    modules:{
        DepoimentModule, 
        UserStateModule: UserModule, 
        DestinyModule: DestinyModule,
    },
})


export function useStore(): Store<State> {
    return vuexUseStore(key)
}