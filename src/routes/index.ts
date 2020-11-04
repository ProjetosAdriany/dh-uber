import { Router } from "express";

import DriverRouter from "./drivers.routes";
import usersRouter from "./users.routes";

const routes = Router();

routes.use("/drivers", DriverRouter);
routes.use("/users", usersRouter);

export default routes;
