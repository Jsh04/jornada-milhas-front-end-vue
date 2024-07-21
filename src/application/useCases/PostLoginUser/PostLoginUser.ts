import LoginDto from "@/application/DTOs/LoginDto";
import LoginInputModel from "@/application/InputModels/LoginInputModel";
import ILoginRequest from "@/application/interfaces/ILoginRequest";
import { InjectionTokenLoginRequest } from "@/configuration/dependecyInjection/InjectionTokens";
import { inject, injectable } from "tsyringe";

@injectable()
class PostLoginUser{

    constructor(@inject(InjectionTokenLoginRequest) private loginRequest: ILoginRequest){}

    public async execute(credentialsLogin: LoginInputModel): Promise<LoginDto>{
        const response = await this.loginRequest.postCredentialsToLogin(credentialsLogin.email, credentialsLogin.password);
        return response;
    }


}

export default PostLoginUser