import PaginationResultResponse from "@/common/results/PaginationResult";
import User from "../entities/users/User";
import ILoginRequest from "@/application/interfaces/ILoginRequest";

export default interface IUserRepository{
    getAllUsers(page: number, size: number): Promise<PaginationResultResponse<User>>

    
}