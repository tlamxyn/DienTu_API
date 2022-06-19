import { Router } from "express";

const routerGioHang = Router();

routerGioHang.get("/"); // --> Lấy danh sách giỏ hàng
routerGioHang.post("/"); // --> Tạo mới 1 giỏ hàng
routerGioHang.get("/:id"); // --> Lấy thông tin giỏ hàng có id :id
routerGioHang.post("/:id"); // --> Thay đổi thông tin giỏ hàng có id :id
routerGioHang.delete("/:id"); // --> Xóa giỏ hàng
routerGioHang.get("/search"); // --> Tìm kiếm giỏ hàng

export default routerGioHang;