import mysql, { ResultSetHeader, QueryError } from "mysql2";
import database from '../database/database';

export const createTableSANPHAM = function () {
    const conn = database.conn;

    const sql = "CREATE TABLE `sanpham`(`SanPhamID` int AUTO_INCREMENT PRIMARY KEY NOT NULL, `TenSP` varchar(255) NOT NULL CHECK(`TenSP` <> ''),`DonGia` int DEFAULT 0,`DonGiaGiam` int DEFAULT 0,`HangTonKho` int DEFAULT 0, `MoTa` text,`LoaiSPID` int NOT NULL,`HinhAnh` varchar(255),`SoSao` float DEFAULT 0,`TrangThai` tinyint DEFAULT 1, `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, `deleted_at` TIMESTAMP NULL);";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('`sanpham` Table is created');
    })
}

export const dropTableSANPHAM = function() {
    const conn = database.conn;

    const sql = "DROP TABLE `sanpham`";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('`sanpham` Table is deleted');
    })
}