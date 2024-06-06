import { Router } from "express";
import CreateRoleCategoryController from "../modules/RoleCategory/Controllers/CreateRoleCategoryController";
const createRoleCategoryController = new CreateRoleCategoryController();
const roleCategoryRoutes = Router();
// Cadastra categoria
roleCategoryRoutes.post('/', createRoleCategoryController.handle);

export default roleCategoryRoutes;