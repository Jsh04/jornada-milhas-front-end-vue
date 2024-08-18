import ILoginInputModel from "@/application/InputModels/ILoginInputModel";
import ILoginRequest from "@/application/interfaces/services/ILoginRequest";
import ITokenService from "@/application/interfaces/services/ITokenService";
import IPostLoginUser from "@/application/interfaces/useCases/IPostLoginUser";
import { Result } from "@/common/results/Result";
import { InjectionTokenLoginRequest, InjectionTokenTokenService } from "@/configuration/dependecyInjection/InjectionTokens";
import { UserErrors } from "@/domain/entities/users/UserErrors";
import { inject, injectable } from "tsyringe";

@injectable()
class PostLoginUser implements IPostLoginUser{

    constructor(
        @inject(InjectionTokenLoginRequest) private loginRequest: ILoginRequest, 
        @inject(InjectionTokenTokenService) private tokenService: ITokenService
    ){}

    public async execute(credentialsLogin: ILoginInputModel): Promise<Result>{
        const resultLogin = await this.loginRequest.postCredentialsToLogin(credentialsLogin.email, credentialsLogin.password);
        
        if (!resultLogin.success) 
            return Result.FailWithErrors(resultLogin.Errors);

        const loginCreditials = resultLogin.ValueOrNull;

        if (!loginCreditials) 
            return Result.FailWithError(UserErrors.CannotReturnToken());
        
        const result = this.tokenService.postTokenLocalStorage(loginCreditials.token);

        return result.success ? Result.Ok() : Result.FailWithErrors(result.Errors);
    }
}

export default PostLoginUser