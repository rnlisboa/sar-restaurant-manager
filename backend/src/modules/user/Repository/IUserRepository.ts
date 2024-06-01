import { User } from "@prisma/client";

export interface IUserRepository{
    createUser: (user: User, passwordHash: string)=>Promise<User>;
    findFirst: (email: string)=>Promise<User | null>;
}