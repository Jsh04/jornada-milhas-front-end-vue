
import { Module } from "vuex";
import { State } from "..";
import User from "@/domain/entities/users/User";
import { UPSERT_USER_AUTHENTICATED } from "../mutations/UserMutations";

export interface StateUser{
    user: User;
}

export const UserModule: Module<StateUser, State> = {
    state: {
        user: {} as User
    },
    mutations: {
        [UPSERT_USER_AUTHENTICATED](state, user: User){
            state.user = user;
        }
    }
}