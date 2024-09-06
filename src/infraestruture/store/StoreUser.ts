import IStoreService from "@/application/interfaces/services/IStoreService";
import { InjectionTokenStoreObj } from "@/configuration/constants/InjectionTokens";
import { State } from "@/store";
import { StateUser } from "@/store/modules/UserModule";
import { inject, injectable } from "tsyringe";
import { Store } from "vuex";

@injectable()
export default class StoreUser implements IStoreService<StateUser> {

    constructor(@inject(InjectionTokenStoreObj) private store: Store<State>){}

    commit(mutation: string, payload: any): void {
        this.store.commit(mutation, payload)
    }

    dispatch(action: string, payload: any): void {
        this.store.commit(action, payload)
    }

    getState(): StateUser {
        return this.store.state.UserStateModule;
    }

}