import { hash } from "bcryptjs"
import validator from 'validator';
import { UserRepository } from "../Repository/UserRepository";
import {  User } from "@prisma/client";
import { IUserRepository } from "../Repository/IUserRepository";

class CreateUserService {
    readonly userRepository: IUserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }
    async execute({...user}: User){

        if(!user.email || !user.password || !user.name || !user.lastname)
            throw new Error("Não é permitido campos vazios.");

        if(!validator.isEmail(user.email))
            throw new Error("Informe um e-mail válido.")
        
        const userAlreadyExists = await this.userRepository.findFirst(user.email);

        if(userAlreadyExists) 
            throw new Error("Usuário com este email já existe.");

        const passwordHash = await hash(user.password, 8);
        const userResponse = await this.userRepository.createUser(user, passwordHash)

        return userResponse;
    }
}

export default CreateUserService;