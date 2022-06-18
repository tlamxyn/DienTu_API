import mysql, { ResultSetHeader, QueryError } from "mysql2";
import database from '../database/database';

export const createTableTAIKHOAN = function () {
    const conn = database.conn;

    const sql = "CREATE TABLE `taikhoan`(`TaiKhoanID` int AUTO_INCREMENT PRIMARY KEY NOT NULL, `Ten` varchar(255) NOT NULL CHECK(`Ten` <> ''),`MatKhau` varchar(255) NOT NULL CHECK(`MatKhau` <> ''),`NgaySinh` date,`DiaChi` varchar(255),`SDT` varchar(255) UNIQUE NULL CHECK(`SDT` <> ''),`Email` varchar(255) UNIQUE NULL CHECK(`Email` <> ''),`GioiTinh` tinyint DEFAULT 0,`HinhAnh` varchar(255),`LaAdmin` tinyint DEFAULT 0,`TrangThai` tinyint DEFAULT 0, `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('`taikhoan` Table is created');
    })
}

export const dropTableTAIKHOAN = function() {
    const conn = database.conn;

    const sql = "DROP TABLE `taikhoan`";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('`taikhoan` Table is deleted');
    })
}