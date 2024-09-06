import PaginationResultResponse from "@/common/results/PaginationResult";
import User from "../entities/users/User";

export default interface IUserRepository{
    getAllUsers(page: number, size: number): Promise<PaginationResultResponse<User>>

    
}