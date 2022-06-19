import { Router } from "express";

const routerChiTietHoaDon = Router();

routerChiTietHoaDon.get("/"); // --> Lấy danh sách chi tiết hóa đơn
routerChiTietHoaDon.post("/"); // --> Thêm mới chi tiết hóa đơn
routerChiTietHoaDon.get("/:id"); // --> Lấy thông tin chi tiết hóa đơn có id :id
routerChiTietHoaDon.post("/:id"); // --> Thay đổi thông tin chi tiết hóa đơn có id :id
routerChiTietHoaDon.delete("/:id"); // --> Xóa chi tiết hóa đơn có id :id bằng "soft"
routerChiTietHoaDon.delete("/:id/hard"); // --> Xóa chi tiết hóa đơn có id :id bằng "hard"
routerChiTietHoaDon.get("/search"); // --> Tìm kiếm chi tiết hóa đơn

export default routerChiTietHoaDon;