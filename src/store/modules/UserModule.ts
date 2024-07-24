
import { Module } from "vuex";
import { State } from "..";
import User from "@/domain/entities/users/User";


export interface StateUser{
    user: User;
}
export const UserModule: Module<StateUser, State> = {
    state: {
        user: {} as User
    },
    mutations: {

    }
}