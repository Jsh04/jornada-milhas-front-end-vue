import CepDto from "@/application/DTOs/CepDto";
import ICepRequest from "../../application/interfaces/services/ICepRequest";
import { AxiosInstance } from "axios";
import { inject, injectable } from "tsyringe";
import { InjectionTokenAxiosClient} from "@/configuration/constants/InjectionTokens";
import AxiosClient from "../api/HttpClient";

@injectable()
class CepRequest implements ICepRequest {
    private httpClient: AxiosInstance;

    constructor(@inject(InjectionTokenAxiosClient) private readonly axiosClient: AxiosClient){
        this.httpClient = axiosClient.getInstance();
    }

    public async getAddressByCep(cep: string): Promise<CepDto> {
        try {
            const response = await this.httpClient.get<CepDto>(`https://viacep.com.br/ws/${cep}/json/`);
            return response.data;
        } catch (error) {
            throw new Error("Erro ao consultar CEP");
        }
    }
    
}

export default CepRequest;