import { Request, Response } from "express";
import CreateRoleService from "../Services/CreateRoleService";
import HttpStatusCodes from "../../../http/httpStatus";

class CreateRoleController {

    async handle(req: Request, res: Response): Promise<Response> {
        const role = req.body;
        const createRoleService = new CreateRoleService();
        const newRole = await createRoleService.execute(role);
        return res.status(HttpStatusCodes.CREATED).json(newRole);
    }
}

export default CreateRoleController;
