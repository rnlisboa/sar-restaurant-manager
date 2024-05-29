import { Router } from "express";
import CreateUserController from "../modules/user/controllers/CreateUserController";

const createUserController = new CreateUserController();

const usersRouter = Router();

// Cadastra usuário
usersRouter.post('/', createUserController.handle);

export default usersRouter;