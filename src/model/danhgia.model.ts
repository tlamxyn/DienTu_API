import { SanPham } from "./sanpham.model";
import { TaiKhoan } from "./taikhoan.model";

export class DanhGia {
  TaiKhoanID: number;
  SanPhamID: number;
  SoSao: number;
  NoiDung?: string;
  created_at!: Date;
  TaiKhoan?: TaiKhoan;
  SanPham?: SanPham;

  constructor(
    TaiKhoanID: number,
    SanPhamID: number,
    SoSao: number,
    NoiDung?: string
  ) {
    this.SanPhamID = SanPhamID;
    this.TaiKhoanID = TaiKhoanID;
    this.SoSao = SoSao;
    if (NoiDung) {
      this.NoiDung = NoiDung;
    }
  }

  public createDanhGia() {}
}
