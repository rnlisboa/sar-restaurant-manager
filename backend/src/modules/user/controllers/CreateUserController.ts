import { Request, Response } from 'express';
import CreateUserService from '../Services/CreateUserService';
import HttpStatusCodes from '../../../http/httpStatus';

class CreateUserController {
    readonly createUserService: CreateUserService;
    
    constructor(){
        this.createUserService = new CreateUserService()
    }
    
    async handle(req: Request, res: Response) {
        const { ...user } = req.body;
        if (req.file) {
            user.profile_image = req.file.filename;
        }

        const userResponse = await this.createUserService.execute(user);
        return res.json(userResponse).status(HttpStatusCodes.CREATED);
    }
}

export default CreateUserController;
