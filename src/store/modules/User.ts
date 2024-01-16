import User from "@/models/User";
import { Module } from "vuex";
import { State } from "..";
import { REGISTER_USER } from "../actions/UserActions";
import HttpClient from "@/http/HttpClient";
import { AxiosResponse } from "axios";


export interface StateUser{
    user: User;
}


export const user: Module<StateUser, State> = {
    state: {
        user: {} as User
    },
    actions: {
        async [REGISTER_USER]({ commit }, user: User){
            const response = await HttpClient.post("/users", {
                user
            });
            return response
        }
    }
}