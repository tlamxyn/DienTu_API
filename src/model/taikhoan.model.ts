import TaiKhoanRepo from "../repository/taikhoan.repo";
export class TaiKhoan {
  TaiKhoanID!: number;
  Ten!: string;
  MatKhau!: string;
  NgaySinh?: Date;
  DiaChi?: string;
  SDT?: string;
  Email?: string;
  GioiTinh!: number;
  HinhAnh?: string;
  LaAdmin!: number;
  TrangThai?: number;
  created_at!: Date;
  updated_at!: Date;
  DS_ThongBao?: Array<any>;
  DS_GioHang?: Array<any>;
  DS_DanhGia?: Array<any>;
  DS_HoaDon?: Array<any>;

  constructor(
    Ten: string,
    MatKhau: string,
    NgaySinh?: Date | null,
    DiaChi?: string | null,
    SDT?: string,
    Email?: string,
    GioiTinh?: number,
    HinhAnh?: string | null,
    LaAdmin?: number,
    TrangThai?: number
  ) {
    this.Ten = Ten;
    this.MatKhau = MatKhau;
    this.MatKhau = MatKhau;
    if (NgaySinh) {
      this.NgaySinh = NgaySinh;
    }
    if (DiaChi) {
      this.DiaChi = DiaChi;
    }
    if (SDT) {
      this.SDT = SDT;
    }
    if (Email) {
      this.Email = Email;
    }
    if (GioiTinh) {
      this.GioiTinh = GioiTinh;
    }
    if (HinhAnh) {
      this.HinhAnh = HinhAnh;
    }
    if (LaAdmin) {
      this.LaAdmin = LaAdmin;
    }
    if (TrangThai) {
      this.TrangThai = TrangThai;
    }
  }

  async createTaiKhoan() {
    const result = await TaiKhoanRepo.createTaiKhoan(
      this.MatKhau,
      this.Ten,
      this.Email,
      this.SDT
    );
    return result;
  }
}
