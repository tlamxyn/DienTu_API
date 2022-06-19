import exp from "constants";
import { Router } from "express";

const routerThongBao = Router();

routerThongBao.get("/"); // --> Lấy danh sách thông báo
routerThongBao.post("/"); // --> Thêm mới 1 thông báo
routerThongBao.get("/:id"); // --> Lấy thông tin một thông báo
routerThongBao.post("/:id"); // --> Thay đổi nội dung thông báo
routerThongBao.delete("/:id"); // --> Xóa một thông báo có id :id
routerThongBao.search("/search"); // --> Tìm kiếm 1 thông báo

export default routerThongBao;