import { Router } from "express";

const routerCarousel = Router();

routerCarousel.get("/"); // --> Lấy danh sách carousel
routerCarousel.post("/"); // --> Thêm mới một carousel
routerCarousel.delete("/"); // --> Xóa tất cả carousel
routerCarousel.delete("/:filename"); // --> Xóa carousel có tên :filename

export default routerCarousel;