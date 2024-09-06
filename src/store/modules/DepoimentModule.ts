
import { Module } from "vuex";
import { State } from "..";
import Depoiment from "@/domain/entities/Depoiment";

export interface StateDepoiment{
    depoiments: Depoiment[];
}


export const DepoimentModule: Module<StateDepoiment, State> = {
    state: {
        depoiments: []
    }
}