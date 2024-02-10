import Destination from "@/models/Destination";
import { Module } from "vuex";
import { State } from "..";
import { DESTINATION_ALL_GET, DESTINATION_POST } from "../actions/DestinyActions";
import HttpClient from "@/http/HttpClient";
import { GET_LIST_DESTINYS } from "../mutations/DestinysMutations";

export interface StateDestination{
    Destinys: Destination[];
}


export const DestinyModule: Module<StateDestination, State> = {
    state: {
        Destinys: []
    },
    mutations: {
        [GET_LIST_DESTINYS](state, destinations: Destination[]){
            state.Destinys = destinations;
        }
    },
    actions: {
        async [DESTINATION_POST](context, destiny: Destination){
            const response = await HttpClient.post<Destination>('/destinos', destiny);
            return response;
        },
        async [DESTINATION_ALL_GET](context, params){
            const response = await HttpClient.get<Destination[]>('/destinos', {
                params: {
                    page: params.page as number,
                    size: params.size as number
                }
            });
            context.commit(GET_LIST_DESTINYS, response.data);
        }
    }
}