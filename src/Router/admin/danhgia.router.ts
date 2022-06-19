import { Router } from "express";

const routerDanhGia = Router();

routerDanhGia.get("/"); // --> Lấy danh sách các đánh giá
routerDanhGia.post("/"); // --> Tạo fake 1 đánh giá đối với user có trang thái nhất định
routerDanhGia.get("/:id"); // --> Lấy nội dung một đánh giá có id :id
routerDanhGia.post("/:id"); // --> Lấy nội dung một đánh giá có id :id
routerDanhGia.delete("/:id"); // --> Xóa nội dung một đánh giá có id :id
routerDanhGia.get("/search"); // --> Tìm kiếm một đánh giá

export default routerDanhGia;