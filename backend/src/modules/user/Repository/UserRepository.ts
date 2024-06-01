import { PrismaClient, User } from "@prisma/client";
import { IUserRepository } from "./IUserRepository";
import prismaClient from "../../../prisma";

export class UserRepository implements IUserRepository{
    constructor(private readonly prisma: PrismaClient) {}
    async createUser(user: User, passwordHash: string): Promise<User>{
        const newUser =  await prismaClient.user.create({
            data: {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                password: passwordHash,
                is_admin: user.is_admin,
                role_id: user.role_id,
                profile_image: user.profile_image
            }
        })
        return newUser;
    };
    
    async findFirst(email: string): Promise<User | null>{
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        return user;
    };
    
}