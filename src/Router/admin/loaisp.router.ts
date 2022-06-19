import { Router } from "express";

const routerLoaiSP = Router();

routerLoaiSP.get("/"); // --> Lấy danh sách loại sản phẩm
routerLoaiSP.post("/"); // --> Tạo một loại sản phẩm mới
routerLoaiSP.get("/:id"); // --> Lấy loại sản phẩm có id :id
routerLoaiSP.post("/:id"); // --> Cập nhật thay đổi loại sản phẩm có id :id
routerLoaiSP.delete("/:id"); // --> Xóa loại sản phẩm có id :id bằng "soft"
routerLoaiSP.delete("/:id/hard"); // --> Xóa loại sản phẩm có id :id bằng "hard"
routerLoaiSP.get("/search"); // --> Tìm kiếm loại sản phẩm

export default routerLoaiSP;