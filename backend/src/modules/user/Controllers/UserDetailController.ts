import { Request, Response } from "express";
import UserDetailService from "../Services/UserDetailService";
import HttpStatusCodes from "../../../http/httpStatus";

class UserDetailController{
    async handle(req: Request, res: Response){
        const {id} = req.body;
        const userDetailService = new UserDetailService()
        const user = await userDetailService.execute(id);
        return res.json(user).status(HttpStatusCodes.OK);
    }
}

export default UserDetailController;