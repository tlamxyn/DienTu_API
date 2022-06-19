import { Router } from "express";
import HomeController from "../../controller/guest/home.controller";
import routerCart from "./cart.router";
import routerSearch from "./search.router";

const guest_router = Router();

guest_router.get("/");
guest_router.post("/register", HomeController.register);
guest_router.post("/login", HomeController.login);
guest_router.post("/logout", HomeController.logout);

guest_router.use("/search", routerSearch);
guest_router.use("/cart", routerCart);


export default guest_router;