import User from "@/models/User";
import { Module } from "vuex";
import { State } from "..";
import { GET_INFO_ADRESS, REGISTER_USER, SEND_REQUEST_CONFIRM_MAIL } from "../actions/UserActions";
import HttpClient from "@/util/http/HttpClient";
import axios from "axios";
import CepResponseDTO from "@/interfaces/CepResponseDTO";


export interface StateUser{
    user: User;
}


export const user: Module<StateUser, State> = {
    state: {
        user: {} as User
    },
    actions: {
        async [REGISTER_USER](context, user: User){
            const response = await HttpClient.post("/usuarios",user);
            return response
        },
        async [GET_INFO_ADRESS](context, cep: string){
            const response = await axios.get<CepResponseDTO>(`https://viacep.com.br/ws/${cep}/json/`);
            return response;
        },
        async [SEND_REQUEST_CONFIRM_MAIL](context, idUser: number){
            const response = await HttpClient.patch("/usuarios/sendConfirmMail", idUser);
            return response;
        }
    },
}