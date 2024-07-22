
import { Module } from "vuex";
import { State } from "..";
import { REGISTER_USER, SEND_REQUEST_CONFIRM_MAIL } from "../actions/UserActions";
import HttpClient from "@/infraestruture/api/HttpClient";
import axios from "axios";
import CepDto from "@/application/DTOs/CepDto";
import User from "@/domain/entities/users/User";


export interface StateUser{
    user: User;
}


export const user: Module<StateUser, State> = {
    state: {
        user: {} as User
    },
    // actions: {
    //     async [REGISTER_USER](context, user: User){
    //         const response = await HttpClient.post("/usuarios",user);
    //         return response
    //     },
    //     async [SEND_REQUEST_CONFIRM_MAIL](context, idUser: number){
    //         const response = await HttpClient.patch("/usuarios/sendConfirmMail", idUser);
    //         return response;
    //     }
    // },
}