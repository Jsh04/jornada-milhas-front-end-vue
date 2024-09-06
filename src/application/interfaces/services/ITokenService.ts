import { Result, ResultValue } from "@/common/results/Result";

export default interface ITokenService {
    postTokenLocalStorage(token: string): Result;
    getTokenFromLocalStorage(): ResultValue<string>;
    removeTokenFromLocalStorage(): Result
}