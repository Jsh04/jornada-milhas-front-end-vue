
import { Module } from "vuex";
import { State } from "..";
import { CONFIRM_MAIL, POST_LOGIN } from "../actions/LoginActions";
import HttpClient from "@/infraestruture/api/HttpClient";

import { REGISTER_USER_LOGGED } from "../mutations/LoginMutations";
import LoginDto from "@/application/DTOs/LoginDto";
import User from "@/domain/entities/users/User";




export interface StateLogin{
    login: LoginDto;
    token: string,
    User: User
}

export const LoginModule: Module<StateLogin, State> = {
    state: {
        login: {} as LoginDto,
        token:'',
        User: {} as User
    },
    mutations: {
        [REGISTER_USER_LOGGED](state, data: LoginDto){
            state.token = data.token;
            state.User = data.user;
        },

    },
    // actions: {
    //     async [POST_LOGIN](context, login: Login){
    //         const response = await HttpClient.post<LoginResponseDto>('/login', login);
            
    //         context.commit(REGISTER_USER_LOGGED, response.data);
    //         return response;
    //     },
    //     async [CONFIRM_MAIL](context, id: number){
    //         const response = await HttpClient.get(`login/confirmMail/${id}`)
    //         return response;
    //     }
    // },
    getters: {
        getToken(state){
            return state.token;
        },
        // isLoginAdm(state){
        //     return state.User.userRole == Role.Admin && state.token != ''
        // }
    }
}