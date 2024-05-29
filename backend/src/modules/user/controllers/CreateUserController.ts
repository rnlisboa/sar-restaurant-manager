import {Request, Response } from 'express'
import CreateUserService from '../services/CreateUserService'

class CreateUserController{
    async handle(req:Request, res: Response){
        const {...user} = req.body;
        const createUserService = new CreateUserService();
        try{
            const userResponse = createUserService.execute(user);
            return res.json(userResponse).status(401);
        } catch(e){
            return res.json(e).status(400);
        }
        
    }
}

export default CreateUserController;