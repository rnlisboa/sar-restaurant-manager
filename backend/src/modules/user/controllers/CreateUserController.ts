import { Request, Response } from 'express';
import CreateUserService from '../Services/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { ...user } = req.body;
        const createUserService = new CreateUserService();
        const userResponse = await createUserService.execute(user);
        return res.json(userResponse).status(401);
    }
}

export default CreateUserController;
