import exp from "constants";
import { Router } from "express";

const routerCart = Router();

routerCart.get("/"); // --> Trả về giỏ hàng của người dùng được lưu trong database. Yêu cầu đăng nhập
routerCart.post("/add"); // --> Thêm sản phẩm vào giỏ hàng
routerCart.delete("/:id"); // --> Xóa sản phẩm khỏi giỏ hàng
routerCart.post("/:id"); // --> Sửa số lượng sản phẩm trong giỏ có 

export default routerCart;