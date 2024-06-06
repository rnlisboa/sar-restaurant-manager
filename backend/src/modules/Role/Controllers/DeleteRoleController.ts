import { Request, Response } from "express";
import DeleteRoleService from "../Services/DeleteRoleService";
import HttpStatusCodes from "../../../http/httpStatus";

class DeleteRoleController {
    private readonly deleteRoleService: DeleteRoleService;

    constructor() {
        this.deleteRoleService = new DeleteRoleService();
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        await this.deleteRoleService.execute(id);
        return res.status(HttpStatusCodes.NO_CONTENT).send();
    }
}

export default DeleteRoleController;
