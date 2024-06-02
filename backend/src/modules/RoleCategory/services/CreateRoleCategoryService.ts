
import { Category } from "@prisma/client";
import { IRoleCategoryRepository } from "../RoleCategoryRepository/IRoleCategoryRepository";
import { RoleCategoryRepository } from "../RoleCategoryRepository/RoleCategoryRepository";

class RoleCategoryService {
    private categoryRepository: IRoleCategoryRepository;

    constructor() {
        this.categoryRepository = new RoleCategoryRepository();
    }

    async execute(name: string): Promise<Category> {
        if(!name)
            throw new Error("Nome inválido");
        return this.categoryRepository.createCategory(name);
    }
}

export default RoleCategoryService;
