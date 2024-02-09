import Destination from "@/models/Destination";
import { Module } from "vuex";
import { State } from "..";
import { DESTINATION_POST } from "../actions/DestinyActions";
import HttpClient from "@/http/HttpClient";

export interface StateDestination{
    Destinys: Destination[];
}


export const DestinyModule: Module<StateDestination, State> = {
    state: {
        Destinys: []
    },
    actions: {
        async [DESTINATION_POST](context, destiny: Destination){
            const response = await HttpClient.post<Destination>('/destinos', destiny);
            return response;
        }
    }
}