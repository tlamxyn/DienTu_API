import { SanPham } from "./sanpham.model";

export class LoaiSP {
    LoaiSPID!: number;
    TenLoai: string;
    TrangThai?: number;
    created_at!: Date;
    updated_at!: Date;
    deleted_at!: Date;
    Ds_SanPham?: Array<SanPham>;

    constructor(TenLoai: string, TrangThai: number) {
        this.TenLoai = TenLoai;
        if(TrangThai) {
            this.TrangThai = TrangThai;
        }
    }

    public createLoaiSP() {

    }
}