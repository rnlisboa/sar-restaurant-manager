import { Request, Response } from "express";
import RoleCategoryService from "../services/CreateRoleCategoryService";
import HttpStatusCodes from "../../../http/httpStatus";

class CreateRoleCategoryController {
    private categoryService: RoleCategoryService;

    constructor() {
        this.categoryService = new RoleCategoryService();
    }

    async handle(req: Request, res: Response){
        const { name } = req.body;
        const category = await this.categoryService.execute(name);
        return res.status(HttpStatusCodes.CREATED).json(category);
    }
}

export default CreateRoleCategoryController;
