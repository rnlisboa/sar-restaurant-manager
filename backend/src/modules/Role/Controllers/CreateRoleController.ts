import { Request, Response } from "express";
import CreateRoleService from "../Services/CreateRoleService";

class CreateRoleController {
    private readonly createRoleService: CreateRoleService;

    constructor() {
        this.createRoleService = new CreateRoleService();
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const role = req.body;
        const newRole = await this.createRoleService.execute(role);
        return res.status(201).json(newRole);
    }
}

export default CreateRoleController;
