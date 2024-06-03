import { PrismaClient, Role } from "@prisma/client";
import { IRoleRepository } from "./IRoleRepository";
import prismaClient from "../../../prisma";

export class RoleRepository implements IRoleRepository {
    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = prismaClient;
    }

    async createRole(role: Role): Promise<Role> {
        const newRole = await this.prisma.role.create({
            data: {
                name: role.name,
                description: role.description,
                category_id: role.category_id
            }
        });
        return newRole;
    }

    async getRoleById(id: string): Promise<Role | null> {
        const role = await this.prisma.role.findUnique({
            where: { id }
        });
        return role;
    }

    async updateRole(id: string, role: Partial<Role>): Promise<Role> {
        const updatedRole = await this.prisma.role.update({
            where: { id },
            data: role
        });
        return updatedRole;
    }

    async deleteRole(id: string): Promise<void> {
        await this.prisma.role.delete({
            where: { id }
        });
    }
}
