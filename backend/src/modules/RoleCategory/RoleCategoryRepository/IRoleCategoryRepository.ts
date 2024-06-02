import { Category } from "@prisma/client";

export interface IRoleCategoryRepository {
    createCategory(name: string): Promise<Category>;
    findCategoryById(id: string): Promise<Category | null>;
    findAllCategories(): Promise<Category[]>;
    deleteCategoryById(id: string): Promise<void>;
}
