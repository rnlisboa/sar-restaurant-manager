import { PrismaClient, User } from "@prisma/client";
import { IUserRepository } from "./IUserRepository";
import prismaClient from "../../../prisma";

export class UserRepository implements IUserRepository {
    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = prismaClient;
    }

    async createUser(user: User, passwordHash: string): Promise<User> {
        const newUser = await this.prisma.user.create({
            data: {
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                password: passwordHash,
                is_admin: user.is_admin,
                role_id: user.role_id,
                profile_image: user.profile_image
            }
        });
        return newUser;
    }

    async findFirst(email: string): Promise<User | null> {
        const user = await this.prisma.user.findFirst({
            where: { email }
        });
        return user;
    }

    async getUserById(id: string): Promise<User | null> {
        return await this.prisma.user.findFirst({
            where: { id }
        });
    }

    async deleteUser(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: { id }
        });
    }

    async updateUser(id: string, user: Partial<User>): Promise<User | null> {
        const updatedUser = await this.prisma.user.update({
            where: { id },
            data: user
        });
        return updatedUser;
    }
}
