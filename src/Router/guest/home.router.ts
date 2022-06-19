import { Router } from "express";

const routerHome = Router();

routerHome.get("/"); // --> Trả về thông tin sản phẩm loại sản phẩm,... cho trang chủ frontend nhận

export default routerHome;