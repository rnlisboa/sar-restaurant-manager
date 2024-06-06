import { Request, Response } from 'express';
import CreateUserService from '../Services/CreateUserService';
import HttpStatusCodes from '../../../http/httpStatus';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { ...user } = req.body;

        const createUserService = new CreateUserService()


        if (req.file) {
            user.profile_image = req.file.filename;
        }

        if(typeof user.is_admin === 'string'){
            if(user.is_admin === 'false') user.is_admin = false;
            else user.is_admin = true;
        }

        const userResponse = await createUserService.execute(user);
        
        return res.json(userResponse).status(HttpStatusCodes.CREATED);
    }
}

export default CreateUserController;
