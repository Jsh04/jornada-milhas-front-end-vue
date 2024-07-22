import PaginationResultResponse from "@/common/results/PaginationResult";
import { InjectionTokenAxiosClient } from "@/configuration/dependecyInjection/InjectionTokens";
import Depoiment from "@/domain/entities/Depoiment";
import AxiosClient from "@/infraestruture/api/HttpClient";
import { AxiosInstance } from "axios";
import { inject, injectable } from "tsyringe";

@injectable()
export class DepoimentRepository{

    private readonly httpClient: AxiosInstance;

    constructor(@inject(InjectionTokenAxiosClient) httpClient: AxiosClient){
        this.httpClient = httpClient.getInstance();
    }

    public async GetAllDepoiments(size = 10, page = 1): Promise<PaginationResultResponse<Depoiment[]>>{
        const response = await this.httpClient.get<PaginationResultResponse<Depoiment[]>>('/depoiment', {
            params: {
                size,
                page
            }
        })
        return response.data;
    }
}

