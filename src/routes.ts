import { Router } from "express";
import { UserController } from "./Controllers/UserController";

export const routes = Router();

routes.post("/user", new UserController().create);
routes.post("/login", new UserController().login);

routes.get("/profile", new UserController().getProfile);
