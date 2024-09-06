import { ResultValue } from "@/common/results/Result";
import LoginDto from "../../DTOs/LoginDto";

export default interface ILoginRequest{
    postCredentialsToLogin(email: string, password: string): Promise<ResultValue<LoginDto>> 
}