import { TaiKhoan } from "./taikhoan.model";

export class HoaDon {
  HoaDonID!: number;
  TaiKhoanID: number;
  NgayLap: Date;
  DiaChiNhan: string;
  SDTNhan: string;
  TongThanhToan?: number;
  TrangThai?: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: Date;
  TaiKhoan?: TaiKhoan;
  ChiTietHoaDon?: Array<any>;
  constructor(
    TaiKhoanID: number,
    NgayLap: Date,
    DiaChiNhan: string,
    SDTNhan: string,
    TongThanhToan: number,
    TrangThai?: number
  ) {
    this.TaiKhoanID = TaiKhoanID;
    this.NgayLap = NgayLap;
    this.DiaChiNhan = DiaChiNhan;
    this.SDTNhan = SDTNhan;
    this.TongThanhToan = TongThanhToan;
    if (TrangThai) {
      this.TrangThai = TrangThai;
    }
  }
  public createHoaDon() {}
}
