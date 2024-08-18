import LoginDto from "@/application/DTOs/LoginDto";
import ILoginRequest from "@/application/interfaces/services/ILoginRequest";
import Error from "@/common/errors/Error";
import IProblemDetails from "@/common/errors/IProblemDetails";
import { ResultValue } from "@/common/results/Result";
import { InjectionTokenAxiosClient } from "@/configuration/dependecyInjection/InjectionTokens";
import AxiosClient from "@/infraestruture/api/HttpClient";
import { AxiosError, AxiosInstance } from "axios";
import { inject, injectable } from "tsyringe";

@injectable()
class LoginRequest implements ILoginRequest{

    private httpClient: AxiosInstance;

    constructor(@inject(InjectionTokenAxiosClient) axiosClient: AxiosClient){
        this.httpClient = axiosClient.getInstance();
    }

    async postCredentialsToLogin(email: string, password: string): Promise<ResultValue<LoginDto>> {
        try {
            const response = await this.httpClient.post<LoginDto>('/login', {email, password});
            return ResultValue.Ok(response.data);
        } catch (error) {

            const errorAxios = error as AxiosError;
            const errorObj = errorAxios.response?.data as IProblemDetails
            
            const result = ResultValue.FailWithError<LoginDto>(new Error(errorObj.Detail, errorObj.Title));
            return result;
        }
    }
}

export default LoginRequest;





