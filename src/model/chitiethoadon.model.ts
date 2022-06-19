import { HoaDon } from "./hoadon.model";
import { SanPham } from "./sanpham.model";

export class ChiTietHoaDon {
  HoaDonID: number;
  SanPhamID: number;
  SoLuong: number;
  GiaMua: number;
  TrangThai?: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: Date;
  HoaDon?: HoaDon;
  SanPham?: SanPham;

  constructor(
    HoaDonID: number,
    SanPhamID: number,
    SoLuong: number,
    GiaMua: number,
    TrangThai?: number
  ) {
    this.HoaDonID = HoaDonID;
    this.SanPhamID = SanPhamID;
    this.SoLuong = SoLuong;
    this.GiaMua = GiaMua;
    if (TrangThai) {
      this.TrangThai = TrangThai;
    }
  }
}
