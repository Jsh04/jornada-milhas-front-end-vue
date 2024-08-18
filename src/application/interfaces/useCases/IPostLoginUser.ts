
import ILoginInputModel from "@/application/InputModels/ILoginInputModel";
import { Result } from "@/common/results/Result";


export default interface IPostLoginUser {
    execute(credentialsLogin: ILoginInputModel): Promise<Result>;
}