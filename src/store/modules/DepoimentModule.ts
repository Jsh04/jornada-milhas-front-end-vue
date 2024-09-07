
import { Module } from "vuex";
import { State } from "..";
import { StateDepoiment } from "@/domain/states/StateDepoiment";


export const DepoimentModule: Module<StateDepoiment, State> = {
    state: {
        depoiments: [],
    }
}