import { Request, Response } from "express";
import DeleteUserService from "../Services/DeleteUserService";
import HttpStatusCodes from "../../../http/httpStatus";

class DeleteUserController{
    readonly deleteUserService: DeleteUserService;
    
    constructor(){
        this.deleteUserService = new DeleteUserService()
    }

    async handle(req: Request, res: Response){
        const {id} = req.body;
        await this.deleteUserService.execute(id);
        return res.status(HttpStatusCodes.NO_CONTENT).send();
    }
}

export default DeleteUserController;