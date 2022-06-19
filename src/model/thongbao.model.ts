import { TaiKhoan } from "./taikhoan.model";

export class ThongBao {
  ThongBaoID!: number;
  TieuDe: string;
  TieuDeCon?: string;
  Ngay: Date;
  NoiDung: string;
  TaiKhoanID: number;
  TrangThai?: number;
  TaiKhoan?: TaiKhoan;
  constructor(
    TieuDe: string,
    Ngay: Date,
    NoiDung: string,
    TaiKhoanID: number,
    TieuDeCon?: string,
    TrangThai?: number
  ) {
    this.TieuDe = TieuDe;
    this.Ngay = Ngay;
    this.NoiDung = NoiDung;
    this.TaiKhoanID = TaiKhoanID;
    if(TieuDeCon) {
        this.TieuDeCon = TieuDeCon;
    }
    if(TrangThai) {
        this.TrangThai = TrangThai;
    }
  }

  public createThongBao() {
    
  }
}
