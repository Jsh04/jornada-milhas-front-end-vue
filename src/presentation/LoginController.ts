import ILoginInputModel from "@/application/InputModels/ILoginInputModel";
import IPostLoginUser from "@/application/interfaces/useCases/IPostLoginUser";
import { Result } from "@/common/results/Result";
import { InjectionTokenUseCasePostLoginToUser } from "@/configuration/constants/InjectionTokens";
import { inject, injectable } from "tsyringe";

@injectable()
export default class LoginController {

    constructor(@inject(InjectionTokenUseCasePostLoginToUser) private readonly postLoginUser: IPostLoginUser) {
    }

    public async MakeLoginUser(loginInputModel: ILoginInputModel): Promise<Result>{
        return await this.postLoginUser.execute(loginInputModel); 
    }

}