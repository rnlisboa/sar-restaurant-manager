import { Request, Response } from 'express';
import UpdateUserService from '../Services/UpdateUserService';
import HttpStatusCodes from '../../../http/httpStatus';

class UpdateUserController {
    readonly updateUserService: UpdateUserService;

    constructor() {
        this.updateUserService = new UpdateUserService();
    }

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { ...userData } = req.body;

        const updatedUser = await this.updateUserService.execute(id, userData);
        return res.status(HttpStatusCodes.OK).json(updatedUser);

    }
}

export default UpdateUserController;
