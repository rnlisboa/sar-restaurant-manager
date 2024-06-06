import { Router } from "express";
import CreateRoleCategoryController from "../modules/RoleCategory/Controllers/CreateRoleCategoryController";
const roleCategoryRoutes = Router();
// Cadastra categoria
roleCategoryRoutes.post('/', new CreateRoleCategoryController().handle);

export default roleCategoryRoutes;