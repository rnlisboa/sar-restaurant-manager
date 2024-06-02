import { PrismaClient, Category } from "@prisma/client";
import { IRoleCategoryRepository } from "./IRoleCategoryRepository";
import prismaClient from "../../../prisma";

export class RoleCategoryRepository implements IRoleCategoryRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = prismaClient;
    }

    async createCategory(name: string): Promise<Category> {
        const category = await this.prisma.category.create({
            data: {
                name
            }
        });
        return category;
    }

    async findCategoryById(id: string): Promise<Category | null> {
        const category = await this.prisma.category.findUnique({
            where: { id }
        });
        return category;
    }

    async findAllCategories(): Promise<Category[]> {
        const categories = await this.prisma.category.findMany();
        return categories;
    }

    async deleteCategoryById(id: string): Promise<void> {
        await this.prisma.category.delete({
            where: { id }
        });
    }
}
