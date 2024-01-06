import Depoiment from "@/models/Depoiment";
import { Module } from "vuex";
import { State } from "..";

export interface StateDepoiment{
    depoiments: Depoiment[];
}


export const depoiment: Module<StateDepoiment, State> = {
    
}