import { hash } from "bcryptjs"
import validator from 'validator';
import { UserDTO } from "../dtos/user.dto";
import prismaClient from "../../../prisma";

class CreateUserService {
    async execute({...user}: UserDTO){

        if(!user.email || !user.password || !user.name || !user.lastname)
            throw new Error("Não é permitido campos vazios.");

        if(!validator.isEmail(user.email))
            throw new Error("Informe um e-mail válido.")
        
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
                password: passwordHash,
                is_admin: user.isAdmin,
                role_id: user.roleId,
                profile_image: user.profileImage
            }
        })

        return userResponse;
    }
}

export default CreateUserService;