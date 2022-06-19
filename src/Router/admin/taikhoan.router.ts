import { Router } from "express";

const routerTaiKhoan = Router();

routerTaiKhoan.get("/"); // --> Lấy danh sách tài khoản
routerTaiKhoan.post("/") // --> Tạo tài khoản mới
routerTaiKhoan.get("/:id"); // --> Lấy ra thông tin tài khoản có id :id
routerTaiKhoan.post("/:id"); // --> Thay đổi thông tin tài khoản có id :id
routerTaiKhoan.delete("/:id"); // --> Xóa tài khoản có id :id
routerTaiKhoan.post("/:id/lock"); // --> Khóa tài khoản có id :id
routerTaiKhoan.post("/:id/unlook"); // --> Mở khóa tài khoản có id :id
routerTaiKhoan.get('/search'); // --> Tìm kiếm tài khoản

export default routerTaiKhoan;