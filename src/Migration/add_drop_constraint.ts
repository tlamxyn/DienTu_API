import mysql, { ResultSetHeader, QueryError } from "mysql2";
import database from '../database/database';

export const addConstraint = function () {
    const conn = database.conn;

    const pk1 = "ALTER TABLE danhgia ADD CONSTRAINT PK_TaKhoanID_SanPhamID PRIMARY KEY (TaiKhoanID, SanPhamID);";
    const pk2 = "ALTER TABLE giohang ADD CONSTRAINT PK_TaKhoanID_SanPhamID PRIMARY KEY (TaiKhoanID, SanPhamID);";
    const pk3 = "ALTER TABLE chitiethoadon ADD CONSTRAINT PK_HoaDonID_SanPhamID PRIMARY KEY (HoaDonID, SanPhamID);";

    const sapham_loaisp = "ALTER TABLE sanpham ADD CONSTRAINT FK_sapham_loaisp FOREIGN KEY (LoaiSPID) REFERENCES loaisp(LoaiSPID);";
    const chitiethoadon_sanpham = "ALTER TABLE chitiethoadon ADD CONSTRAINT FK_chitiethoadon_sanpham FOREIGN KEY (SanPhamID) REFERENCES sanpham(SanPhamID);";
    const danhgia_sanpham = "ALTER TABLE danhgia ADD CONSTRAINT FK_danhgia_sanpham FOREIGN KEY (SanPhamID) REFERENCES sanpham(SanPhamID);";
    const giohang_sanpham = "ALTER TABLE giohang ADD CONSTRAINT FK_giohang_sanpham FOREIGN KEY (SanPhamID) REFERENCES sanpham(SanPhamID);";
    const danhgia_taikhoan = "ALTER TABLE danhgia ADD CONSTRAINT FK_danhgia_taikhoan FOREIGN KEY (TaiKhoanID) REFERENCES taikhoan(TaiKhoanID);";
    const giohang_taikhoan = "ALTER TABLE giohang ADD CONSTRAINT FK_giohang_taikhoan FOREIGN KEY (TaiKhoanID) REFERENCES taikhoan(TaiKhoanID);";
    const thongbao_taikhoan = "ALTER TABLE thongbao ADD CONSTRAINT FK_thongbao_taikhoan FOREIGN KEY (TaiKhoanID) REFERENCES taikhoan(TaiKhoanID);";
    const hoadon_taikhoan = "ALTER TABLE hoadon ADD CONSTRAINT FK_hoadon_taikhoan FOREIGN KEY (TaiKhoanID) REFERENCES taikhoan(TaiKhoanID);";
    const chitiethoadon_hoadon = "ALTER TABLE chitiethoadon ADD CONSTRAINT FK_chitiethoadon_hoadon FOREIGN KEY (HoaDonID) REFERENCES hoadon(HoaDonID);";

    conn.execute(pk1, (err:QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('Primary Key Constraint of danhgia is created');
    })
    conn.execute(pk2, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('Primary Key Constraint of giohang is created');
    })
    conn.execute(pk3, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('Primary Key Constraint of chitiethoadon is created');
    })

    conn.execute(sapham_loaisp, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('sanpham constraint to loaisp is created');
    })
    conn.execute(chitiethoadon_sanpham, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('chitiethoadon constraint to sanpham is created');
    })
    conn.execute(danhgia_sanpham, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('danhgia constraint to sanpham is created');
    })
    conn.execute(giohang_sanpham, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('giohang constraint to sanpham is created');
    })
    conn.execute(danhgia_taikhoan, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('danhgia constaint to taikhoan is created');
    })
    conn.execute(giohang_taikhoan, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('giohang constraint to taikhoan is created');
    })
    conn.execute(thongbao_taikhoan, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('thongbao constraint to taikhoan is created');
    })
    conn.execute(hoadon_taikhoan, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('hoadon constraint to taikhoan is created');
    })
    conn.execute(chitiethoadon_hoadon, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('chitiethoadon constraint to hoadon is created');
    })
}


export const dropConstraint = function() {
    const conn = database.conn;

    const pk1 = "ALTER TABLE danhgia DROP PRIMARY KEY;";
    const pk2 = "ALTER TABLE giohang DROP PRIMARY KEY;";
    const pk3 = "ALTER TABLE chitiethoadon DROP PRIMARY KEY;";

    const sapham_loaisp = "ALTER TABLE sanpham DROP CONSTRAINT FK_sapham_loaisp;";
    const chitiethoadon_sanpham = "ALTER TABLE chitiethoadon DROP CONSTRAINT FK_chitiethoadon_sanpham;";
    const danhgia_sanpham = "ALTER TABLE danhgia DROP CONSTRAINT FK_danhgia_sanpham;";
    const giohang_sanpham = "ALTER TABLE giohang DROP CONSTRAINT FK_giohang_sanpham;";
    const danhgia_taikhoan = "ALTER TABLE danhgia DROP CONSTRAINT FK_danhgia_taikhoan;";
    const giohang_taikhoan = "ALTER TABLE giohang DROP CONSTRAINT FK_giohang_taikhoan;";
    const thongbao_taikhoan = "ALTER TABLE thongbao DROP CONSTRAINT FK_thongbao_taikhoan;";
    const hoadon_taikhoan = "ALTER TABLE hoadon DROP CONSTRAINT FK_hoadon_taikhoan;";
    const chitiethoadon_hoadon = "ALTER TABLE chitiethoadon DROP CONSTRAINT FK_chitiethoadon_hoadon;";

    conn.execute(pk1, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('Primary Key constraint of danhgia is deleted');
    })
    conn.execute(pk2, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('Primary Key constraint of giohang is deleted');
    })
    conn.execute(pk3, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('Primary Key constraint of chitiethoadon is deleted');
    })

    conn.execute(sapham_loaisp, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('sanpham constraint to loaisp is deleted');
    })
    conn.execute(chitiethoadon_sanpham, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('chitiethoadon constraint to sanpham is deleted');
    })
    conn.execute(danhgia_sanpham, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('danhgia constraint to sanpham is deleted');
    })
    conn.execute(giohang_sanpham, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('giohang constraint to sanpham is deleted');
    })
    conn.execute(danhgia_taikhoan, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('danhgia constaint to taikhoan is deleted');
    })
    conn.execute(giohang_taikhoan, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('giohang constraint to taikhoan is deleted');
    })
    conn.execute(thongbao_taikhoan, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('thongbao constraint to taikhoan is deleted');
    })
    conn.execute(hoadon_taikhoan, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('hoadon constraint to taikhoan is deleted');
    })
    conn.execute(chitiethoadon_hoadon, (err: QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('chitiethoadon constraint to hoadon is deleted');
    })
}