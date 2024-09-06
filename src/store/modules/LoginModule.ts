
import { Module } from "vuex";
import { State } from "..";
import { REGISTER_USER_LOGGED } from "../mutations/LoginMutations";
import LoginDto from "@/application/DTOs/LoginDto";
import User from "@/domain/entities/users/User";

export interface StateLogin{
    token: string,
    User: User
}

export const LoginModule: Module<StateLogin, State> = {
    state: {
        token:'',
        User: {} as User
    },
    mutations: {
        [REGISTER_USER_LOGGED](state, data: LoginDto){
            state.token = data.token;
            state.User = data.user;
        },

    },
    getters: {
        getToken(){
            return localStorage.getItem('token')
        },
    }
}