import { Router } from "express";

const routerSanPham = Router();

routerSanPham.get("/"); // --> Lấy danh sách sản phẩm
routerSanPham.post("/"); // --> Tạo ra sản phẩm mới
routerSanPham.get("/:id"); // --> Lấy thông tin sản phẩm có id :id
routerSanPham.post("/:id"); // --> Cập nhật sản phẩm có id :id
routerSanPham.delete("/:id"); // --> Xóa sản phẩm có id :id kiểu "soft"
routerSanPham.delete("/:id/hard"); // --> Xóa sản phẩm có id :id kiểu "hard"
routerSanPham.get("/search"); // --> Tìm kiếm sản phẩm

export default routerSanPham;