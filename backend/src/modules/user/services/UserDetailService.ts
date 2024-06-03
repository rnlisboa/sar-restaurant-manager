import { IUserRepository } from "../Repository/IUserRepository";
import { UserRepository } from "../Repository/UserRepository";

class UserDetailService{
    readonly userRepository: IUserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }

    public async execute(id: string){
        if(!id) throw new Error("Id não enviado.");
        return await this.userRepository.getUserById(id);
    }
}

export default UserDetailService;