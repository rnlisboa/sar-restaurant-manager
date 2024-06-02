import { Request, Response } from "express";
import RoleCategoryService from "../services/CreateRoleCategoryService";

class CreateRoleCategoryController {
    private categoryService: RoleCategoryService;

    constructor() {
        this.categoryService = new RoleCategoryService();
    }

    async handle(req: Request, res: Response){
        const { name } = req.body;
        const category = await this.categoryService.execute(name);
        return res.status(201).json(category);
    }
}

export default CreateRoleCategoryController;
