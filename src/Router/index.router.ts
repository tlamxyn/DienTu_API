import { Router, Request, Response } from "express";
import admin_router from "./admin/index.router";
import guest_router from "./guest/index.router";

const router = Router();

router.use("/admin", admin_router);
router.use("/", guest_router);

export default router;
