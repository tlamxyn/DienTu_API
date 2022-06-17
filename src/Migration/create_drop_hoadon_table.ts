import mysql, { ResultSetHeader, QueryError } from "mysql2";
import database from '../Database/database';

export const createTableHOADON = function () {
    const conn = database.conn;

    const sql = "CREATE TABLE `hoadon`(`HoaDonID` int AUTO_INCREMENT PRIMARY KEY NOT NULL, `TaiKhoanID` int NOT NULL,`NgayLap` date NOT NULL,`DiaChiNhan` varchar(255) NOT NULL,`SDTNhan` varchar(255) NOT NULL,`TongThanhToan` int NOT NULL,`TrangThai` tinyint DEFAULT 1, `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,`deleted_at` TIMESTAMP NULL);";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('`hoadon` Table is created');
    })
}

export const dropTableHOADON = function() {
    const conn = database.conn;

    const sql = "DROP TABLE `hoadon`";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('`hoadon` Table is deleted');
    })
}