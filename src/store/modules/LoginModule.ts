import Login from "@/models/Login";
import { Module } from "vuex";
import { State } from "..";
import { POST_LOGIN } from "../actions/LoginActions";
import HttpClient from "@/http/HttpClient";

export interface StateLogin{
    login: Login;
}

export const LoginModule: Module<StateLogin, State> = {
    state: {
        login: {} as Login
    },
    actions: {
        async [POST_LOGIN]({ commit }, login: Login){
            const response = await HttpClient.post<Login>('/login', login);
            return response;
        }
    }
}