import ITokenService from "@/application/interfaces/services/ITokenService";
import { TokenKeyLocalStorage } from "@/common/constants/TokenConstant";
import Error from "@/common/errors/Error";
import { Result, ResultValue } from "@/common/results/Result";
import { injectable } from "tsyringe";

@injectable()
export default class TokenService implements ITokenService  {


    removeTokenFromLocalStorage(): Result {
        localStorage.removeItem(TokenKeyLocalStorage);
        return Result.Ok();
    }

    postTokenLocalStorage(token: string): Result {
        localStorage.setItem(TokenKeyLocalStorage, token);
        return Result.Ok();
    }

    getTokenFromLocalStorage(): ResultValue<string> {
        const token = localStorage.getItem(TokenKeyLocalStorage);
        if (!token) 
            return ResultValue.FailWithError(TokenErrors.TokenNotFound());
        
        return ResultValue.Ok(token);
    }
}

class TokenErrors{
    public static TokenNotFound(){
        return new Error("Usuário não logado", "TokenErrors.TokenNotFound")
    }
}