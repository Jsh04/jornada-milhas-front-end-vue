import ILoginRepository from "@/common/data/ILoginRequest";
import PaginationResultResponse from "@/common/results/PaginationResult";
import User from "@/domain/entities/users/User";
import IUserRepository from "@/domain/interfaces/IUserRepository";
import LoginDto from "@/infraestruture/DTOs/LoginDto";

export default  class UserRepository implements ILoginRepository, IUserRepository{


    getAllUsers(page: number, size: number): Promise<PaginationResultResponse<User[]>> {
        throw new Error("Method not implemented.");
    }
    
    postUserToLogin(email: string, password: string): Promise<LoginDto> {
        throw new Error("Method not implemented.");
    }

}