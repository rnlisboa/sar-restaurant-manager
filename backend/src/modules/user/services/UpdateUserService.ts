import { IUserRepository } from "../Repository/IUserRepository";
import { UserRepository } from "../Repository/UserRepository";
import { User } from "@prisma/client";

class UpdateUserService {
    readonly userRepository: IUserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async execute(id: string, userData: Partial<User>) {
        if (!id) throw new Error("Id não enviado.");
        return await this.userRepository.updateUser(id, userData);
    }
}

export default UpdateUserService;
