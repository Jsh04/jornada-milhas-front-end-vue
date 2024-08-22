import PaginationResultResponse from "@/common/results/PaginationResult";
import { InjectionTokenAxiosClient } from "@/configuration/constants/InjectionTokens";

import Destination from "@/domain/entities/Destination";
import IDestinyRepository from "@/domain/interfaces/IDestinyRepository";
import AxiosClient from "@/infraestruture/api/HttpClient";
import { AxiosInstance } from "axios";
import { inject, injectable } from "tsyringe";

@injectable()
export class DestinyRepository implements IDestinyRepository{

    private readonly httpClient: AxiosInstance;

    constructor(@inject(InjectionTokenAxiosClient) httpClient: AxiosClient){
        this.httpClient = httpClient.getInstance();
    }

    public async getAllDestinies(page: number, size: number): Promise<PaginationResultResponse<Destination>> {
        const response = await this.httpClient.get<PaginationResultResponse<Destination>>('/destiny', {
            params: {
                size,
                page
            }
        });
        return response.data;
    }


}

