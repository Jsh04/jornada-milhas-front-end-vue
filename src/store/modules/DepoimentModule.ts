import Depoiment from "@/domain/Depoiment";
import { Module } from "vuex";
import { State } from "..";

export interface StateDepoiment{
    depoiments: Depoiment[];
}


export const depoimentModule: Module<StateDepoiment, State> = {
    state: {
        depoiments: []
    }
}