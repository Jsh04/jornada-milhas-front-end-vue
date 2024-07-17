import PaginationResultResponse from "@/common/results/PaginationResult";
import Depoiment from "@/domain/Depoiment";
import { AxiosInstance } from "axios";


export class DepoimentRepository{

    private readonly httpClient: AxiosInstance;

    constructor(httpClient: AxiosInstance){
        this.httpClient = httpClient;
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

