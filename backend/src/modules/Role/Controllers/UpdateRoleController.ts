import { Request, Response } from "express";
import UpdateRoleService from "../Services/UpdateRoleService";
import HttpStatusCodes from "../../../http/httpStatus";

class UpdateRoleController {
    private readonly updateRoleService: UpdateRoleService;

    constructor() {
        this.updateRoleService = new UpdateRoleService();
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const role = req.body;
        const updatedRole = await this.updateRoleService.execute(id, role);
        return res.status(HttpStatusCodes.OK).json(updatedRole);
    }
}

export default UpdateRoleController;
