import { Request, Response } from "express";
import CreateRoleCategoryService from "../Services/CreateRoleCategoryService";
import HttpStatusCodes from "../../../http/httpStatus";

class CreateRoleCategoryController {

    async handle(req: Request, res: Response){
        const { name } = req.body;
        const createRoleCategoryService = new CreateRoleCategoryService();
        const category = await createRoleCategoryService.execute(name);
        return res.status(HttpStatusCodes.CREATED).json(category);
    }
}

export default CreateRoleCategoryController;
