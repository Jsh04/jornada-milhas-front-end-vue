import LoginDto from "@/application/DTOs/LoginDto";
import ILoginRequest from "@/application/interfaces/ILoginRequest";
import { InjectionTokenAxiosClient } from "@/configuration/dependecyInjection/InjectionTokens";
import AxiosClient from "@/infraestruture/api/HttpClient";
import { AxiosInstance } from "axios";
import { inject, injectable } from "tsyringe";

@injectable()
class LoginRequest implements ILoginRequest{

    private httpClient: AxiosInstance;

    constructor(@inject(InjectionTokenAxiosClient) axiosClient: AxiosClient){
        this.httpClient = axiosClient.getInstance();
    }

    async postCredentialsToLogin(email: string, password: string): Promise<LoginDto> {
        try {
            const response = await this.httpClient.post<LoginDto>('/login', {email, password});
            return response.data;
        } catch (error) {
            throw new Error();
        }
        
    }
}

export default LoginRequest;