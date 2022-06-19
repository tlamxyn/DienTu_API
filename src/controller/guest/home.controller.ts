import { Request, Response } from "express";
import { TaiKhoan } from "../../model/taikhoan.model";

export default class HomeController {
  static async register(req: Request, res: Response) {
    const MatKhau = req.body.MatKhau;
    const SDT = req.body.SDT;
    const Email = req.body.Email;
    const Ten = "guest" + (Email || SDT);

    const taikhoan = new TaiKhoan(Ten, MatKhau, null, null, SDT, Email, 0, null, 0, 1);
    res.status(200).json(await taikhoan.createTaiKhoan());
  }
  static async login(req: Request, res: Response) {}

  static async logout(req: Request, res: Response) {}
}
