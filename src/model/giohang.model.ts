import { SanPham } from "./sanpham.model";
import { TaiKhoan } from "./taikhoan.model";

export class GioHang {
  TaiKhoanID: number;
  SanPhamID: number;
  SoLuong?: number;
  TaiKhoan?: TaiKhoan;
  SanPham?: SanPham;
  constructor(TaiKhoanID: number, SanPhamID: number, SoLuong?: number) {
    this.TaiKhoanID = TaiKhoanID;
    this.SanPhamID = SanPhamID;
    if (SoLuong) {
      this.SoLuong = SoLuong;
    }
  }
  public createGioHang() {}
}
