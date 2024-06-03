import { Router } from "express";
import uploadConfig from "../config/multer"
import CreateUserController from "../modules/user/Controllers/CreateUserController";
import multer from "multer";
import UserDetailController from "../modules/user/Controllers/UserDetailController";
import UpdateUserController from "../modules/user/Controllers/UpdateUserController";
import DeleteUserController from "../modules/user/Controllers/DeleteUserController";

const usersRouter = Router();
const upload = multer(uploadConfig.upload('./tmp'))
// CRUD USUARIO
usersRouter.post('/', upload.single('file'),new CreateUserController().handle);
usersRouter.get('/:id', new UserDetailController().handle);
usersRouter.put('/:id', upload.single("file"), new UpdateUserController().handle);
usersRouter.delete('/:id', new DeleteUserController().handle);

export default usersRouter;