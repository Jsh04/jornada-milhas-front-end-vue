import IUserRepository from "@/domain/interfaces/IUserRepository";


export class PostLoginUser{

    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }

    public async execute(): Promise<void>{
        this.userRepository.getAllUsers
    }


}