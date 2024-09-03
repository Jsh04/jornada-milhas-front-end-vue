import Error from "@/common/errors/Error";
import IProblemDetails from "@/common/errors/IProblemDetails";
import PaginationResultResponse from "@/common/results/PaginationResult";
import { Result } from "@/common/results/Result";
import { InjectionTokenAxiosClient } from "@/configuration/constants/InjectionTokens";

import Destination from "@/domain/entities/Destination";
import IDestinyRepository from "@/domain/interfaces/IDestinyRepository";
import AxiosClient from "@/infraestruture/api/HttpClient";
import { AxiosError, AxiosInstance } from "axios";
import { inject, injectable } from "tsyringe";

@injectable()
export class DestinyRepository implements IDestinyRepository{

    private readonly endPointApi = "/destiny";
    private readonly httpClient: AxiosInstance;


    constructor(@inject(InjectionTokenAxiosClient) httpClient: AxiosClient){
        this.httpClient = httpClient.getInstance();
    }

    public async deleteDestinyById(destinyId: number): Promise<Result> {
        try {
            await this.httpClient.delete(this.endPointApi + `/${destinyId}`);
            return Result.Ok();
        } catch (error) {
            
            const errorAxios = error as AxiosError;
            const errorObj = errorAxios.response?.data as IProblemDetails
            const result = Result.FailWithError(new Error(errorObj.Detail, errorObj.Title));
            return result;
        }
        

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

