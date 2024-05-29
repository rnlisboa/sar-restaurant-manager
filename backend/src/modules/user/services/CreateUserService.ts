import { hash } from "bcryptjs"
import { UserDTO } from "../dtos/user.dto";
import prismaClient from "../../../prisma";

class CreateUserService {
    async execute({...user}: UserDTO){


        if(!user.email || !user.password || !user.name || !user.lastname)
            throw new Error("Não é permitido campos vazios.");
        
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: user.email
            }
        })

        if(userAlreadyExists) 
            throw new Error("Usuário com este email já existe.");

        const passwordHash = await hash(user.password, 8);
        const userResponse = await prismaClient.user.create({
            data: {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                is_admin: user.isAdmin,
                password: passwordHash,
            }
        })

        return userResponse;
    }
}

export default CreateUserService;