import { Request, Response } from "express";
import UserDetailService from "../Services/UserDetailService";
import HttpStatusCodes from "../../../http/httpStatus";

class UserDetailController{
    readonly userDetailService: UserDetailService;
    
    constructor(){
        this.userDetailService = new UserDetailService()
    }

    async handle(req: Request, res: Response){
        const {id} = req.body;
        const user = await this.userDetailService.execute(id);
        return res.json(user).status(HttpStatusCodes.OK);
    }
}

export default UserDetailController;