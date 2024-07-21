
import PaginationResultResponse from "@/common/results/PaginationResult";
import User from "@/domain/entities/users/User";
import IUserRepository from "@/domain/interfaces/IUserRepository";
import { injectable } from "tsyringe";

@injectable() 
class UserRepository implements IUserRepository{
    
    getAllUsers(page: number, size: number): Promise<PaginationResultResponse<User>> {
        throw new Error("Method not implemented.");
    }

}

export default UserRepository;