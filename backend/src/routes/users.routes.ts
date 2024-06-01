import { Router } from "express";

import CreateUserController from "../modules/user/Controllers/CreateUserController";
import multerConfig from "../config/multer";
import multer from "multer";
const upload = multer(multerConfig.upload("./tmp"))
const createUserController = new CreateUserController();

const usersRouter = Router();

// Cadastra usuário
usersRouter.post('/', createUserController.handle);

export default usersRouter;