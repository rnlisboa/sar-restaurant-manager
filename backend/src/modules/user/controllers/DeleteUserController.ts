import { Request, Response } from "express";
import DeleteUserService from "../Services/DeleteUserService";

class DeleteUserController{
    readonly deleteUserService: DeleteUserService;
    
    constructor(){
        this.deleteUserService = new DeleteUserService()
    }

    async handle(req: Request, res: Response){
        const {id} = req.body;
        await this.deleteUserService.execute(id);
        return res.json({message: "Usuário deletado com sucesso."}).status(200);
    }
}

export default DeleteUserController;