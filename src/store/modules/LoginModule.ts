import Login from "@/models/Login";
import { Module } from "vuex";
import { State } from "..";
import { POST_LOGIN } from "../actions/LoginActions";
import HttpClient from "@/services/http/HttpClient";
import LoginResponseDto from "@/interfaces/LoginResponseDTO";
import { REGISTER_USER_LOGGED } from "../mutations/LoginMutations";
import User from "@/models/User";
import { Role } from "@/models/enums/EnumsRole";



export interface StateLogin{
    login: Login;
    token: string,
    User: User
}

export const LoginModule: Module<StateLogin, State> = {
    state: {
        login: {} as Login,
        token:'',
        User: {} as User
    },
    mutations: {
        [REGISTER_USER_LOGGED](state, data: LoginResponseDto){
            state.token = data.token;
            state.User = data.user;
        },

    },
    actions: {
        async [POST_LOGIN](context, login: Login){
            const response = await HttpClient.post<LoginResponseDto>('/login', login);
            
            context.commit(REGISTER_USER_LOGGED, response.data);
            return response;
        }
    },
    getters: {
        getToken(state){
            return state.token;
        },
        isLoginAdm(state){
            return state.User.userRole == Role.Admin && state.token != ''
        }
    }
}