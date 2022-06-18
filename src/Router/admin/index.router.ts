import { Router, Request, Response } from "express";
import routerSelf from "./self.router";

const admin_router = Router();

admin_router.get("/");
admin_router.post('/login');
admin_router.post('/logout');

admin_router.use("/yourself", routerSelf);

export default admin_router;
