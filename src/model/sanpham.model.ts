import { HoaDon } from "./hoadon.model";
import { LoaiSP } from "./loaisp.model";

export class SanPham {
  SanPhamID!: number;
  TenSP: string;
  LoaiSPID: number;
  DonGia?: number;
  DonGiaGiam?: number;
  HangTonKho?: number;
  MoTa?: string;
  HinhAnh?: string;
  SoSao?: number;
  TrangThai?: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: Date;
  LoaiSP?: LoaiSP;
  DS_HoaDon?: Array<HoaDon>;

  constructor(
    TenSP: string,
    LoaiSPID: number,
    DonGia?: number,
    DonGiaGiam?: number,
    HangTonKho?: number,
    MoTa?: string,
    HinhAnh?: string,
    SoSao?: number,
    TrangThai?: number
  ) {
    this.TenSP = TenSP;
    this.LoaiSPID = LoaiSPID;
    if (DonGia) {
      this.DonGia = DonGia;
    }
    if (DonGiaGiam) {
      this.DonGiaGiam = DonGiaGiam;
    }
    if (HangTonKho) {
      this.HangTonKho = HangTonKho;
    }
    if (MoTa) {
      this.MoTa = MoTa;
    }
    if (HinhAnh) {
      this.HinhAnh = HinhAnh;
    }
    if (SoSao) {
      this.SoSao = SoSao;
    }
    if (TrangThai) {
      this.TrangThai = TrangThai;
    }
  }

  public createSanPham() {}
}
