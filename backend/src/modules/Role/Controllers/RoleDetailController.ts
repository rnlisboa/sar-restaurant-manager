import { Request, Response } from "express";
import RoleDetailService from "../Services/RoleDetailService";
import HttpStatusCodes from "../../../http/httpStatus";

class RoleDetailController {
    private readonly getRoleByIdService: RoleDetailService;

    constructor() {
        this.getRoleByIdService = new RoleDetailService();
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const role = await this.getRoleByIdService.execute(id);
        return res.status(HttpStatusCodes.OK).json(role);
    }
}

export default RoleDetailController;
