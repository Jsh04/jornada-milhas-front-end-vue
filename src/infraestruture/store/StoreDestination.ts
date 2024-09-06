import IStoreService from "@/application/interfaces/services/IStoreService";
import { InjectionTokenStoreObj } from "@/configuration/constants/InjectionTokens";
import { State } from "@/store";
import { StateDestination } from "@/store/modules/DestinyModule";
import { inject, injectable } from "tsyringe";
import { Store } from "vuex";

@injectable()
export default class StoreDestination implements IStoreService<StateDestination> {

    constructor(@inject(InjectionTokenStoreObj) private store: Store<State>){}

    commit(mutation: string, payload: any): void {
        this.store.commit(mutation, payload)
    }

    dispatch(action: string, payload: any): void {
        this.store.commit(action, payload)
    }

    getState(): StateDestination {
        return this.store.state.DestinyModule;
    }

}