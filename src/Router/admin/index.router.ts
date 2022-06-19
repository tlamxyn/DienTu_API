import { Router } from "express";
import routerSelf from "./self.router";
import routerCarousel from "./carousel.router";
import routerTaiKhoan from "./taikhoan.router";
import routerLoaiSP from "./loaisp.router";
import routerHoaDon from "./hoadon.router";
import routerChiTietHoaDon from "./chitiethoadon.router";
import routerGioHang from "./giohang.router";

const admin_router = Router();

admin_router.get("/");
admin_router.post("/login");
admin_router.post("/logout");

admin_router.use("/yourself", routerSelf);
admin_router.use("/carousel", routerCarousel);
admin_router.use("/taikhoan", routerTaiKhoan); 
admin_router.use("/loaisp", routerLoaiSP);
admin_router.use("/hoadon", routerHoaDon);;
admin_router.use("/chitiethoadon", routerChiTietHoaDon)
admin_router.use("/giohang", routerGioHang);

export default admin_router;
