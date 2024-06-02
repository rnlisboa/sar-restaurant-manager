import { Router } from "express";
import uploadConfig from "../config/multer"
import CreateUserController from "../modules/user/Controllers/CreateUserController";
import multer from "multer";

const usersRouter = Router();
const upload = multer(uploadConfig.upload('./tmp'))
// Cadastra usuário
usersRouter.post('/', upload.single('file'),new CreateUserController().handle);

export default usersRouter;