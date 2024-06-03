import { Router } from "express";
import CreateRoleController from "../modules/Role/Controllers/CreateRoleController";
import RoleDetailController from "../modules/Role/Controllers/RoleDetailController";
import UpdateUserController from "../modules/user/Controllers/UpdateUserController";
import DeleteRoleController from "../modules/Role/Controllers/DeleteRoleController";


const rolesRouter = Router();


rolesRouter.post('/', new CreateRoleController().handle);
rolesRouter.get('/:id', new RoleDetailController().handle);
rolesRouter.put('/:id', new UpdateUserController().handle);
rolesRouter.delete('/:id', new DeleteRoleController().handle);

export default rolesRouter;
