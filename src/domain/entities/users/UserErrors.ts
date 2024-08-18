import Error from "@/common/errors/Error"

export class UserErrors{

    public static CannotReturnToken(){
        return new Error("Não foi possível capturar o token", "UserErrors.CannotReturnToken")
    }
}