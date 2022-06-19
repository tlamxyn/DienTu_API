import { Router } from "express";

const routerHoaDon = Router();

routerHoaDon.get("/"); // --> Lấy danh sách hóa đơn
routerHoaDon.post("/"); // --> Thêm mới 1 hóa đơn
routerHoaDon.get("/:id"); // --> Lấy thông tin 1 hóa đon có id :id
routerHoaDon.post("/:id"); // --> Cập nhật thay đổi thông tin hóa đơn có id :id
routerHoaDon.delete("/:id"); // --> Xóa hóa đơn có id :id bằng "soft"
routerHoaDon.delete("/:id/hard"); // --> Xóa hóa đơn có id :id bằng "hard"
routerHoaDon.get("/search"); // --> Tìm kiếm hóa đơn

export default routerHoaDon;