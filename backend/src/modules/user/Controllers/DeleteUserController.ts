import { Request, Response } from "express";
import DeleteUserService from "../Services/DeleteUserService";
import HttpStatusCodes from "../../../http/httpStatus";

class DeleteUserController{
    async handle(req: Request, res: Response){
        const {id} = req.body;
        const deleteUserService = new DeleteUserService();
        await deleteUserService.execute(id);
        return res.status(HttpStatusCodes.NO_CONTENT).send();
    }
}

export default DeleteUserController;