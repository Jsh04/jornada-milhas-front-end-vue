import CepResponseDTO from "@/interfaces/DTOs/CepResponseDTO";
import { State, useStore } from "@/store";
import { GET_INFO_ADRESS } from "@/store/actions/UserActions";
import Util from "@/util/Util";
import { AxiosResponse } from "axios";
import { Store } from "vuex";

export default class CepService{

    private store: Store<State>

    constructor(){
        this.store = useStore();
    }

    async RequestGetViaCep(cep: string){
        try {
            const cepConverted = this.FormatCep(cep);

            const response: AxiosResponse<CepResponseDTO, any> = await this.store.dispatch(GET_INFO_ADRESS, cepConverted);
        
            return response.data;

          } catch (error) {
            Util.ShowAlert("Não foi possível recuperar os dados do CEP", "error", undefined, [true, "Ok"]);
            return undefined;
          }
    }

    private FormatCep(cep: string){
        const cepConverted = cep.replace(/\D/g, "");
        return cepConverted;
    }
}