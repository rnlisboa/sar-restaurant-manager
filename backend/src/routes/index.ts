import { Router } from "express";
import usersRouter from "./users.routes";
import rolesRouter from "./role.routes";
import roleCategoryRoutes from "./role.category.routes";

const routes = Router();

routes.use('/users', usersRouter)
routes.use('/role-categories', roleCategoryRoutes)
routes.use('/roles', rolesRouter)

export default routes;