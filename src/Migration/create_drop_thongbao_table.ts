import mysql, { ResultSetHeader, QueryError } from "mysql2";
import database from '../Database/database';

export const createTableTHONGBAO = function () {
    const conn = database.conn;

    const sql = "CREATE TABLE `thongbao`(`ThongBaoID` int AUTO_INCREMENT PRIMARY KEY NOT NULL, `TieuDe` varchar(255) NOT NULL, `TieuDeCon` varchar(255), `Ngay` date NOT NULL,`NoiDung` text NOT NULL, `TaiKhoanID` int NOT NULL,`TrangThai` tinyint DEFAULT 1, `URL` varchar(255), `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader) => {
        if(err) console.log(err.message);
        if(result) console.log('`thongbao` Table is created');
    })
}

export const dropTableTHONGBAO = function() {
    const conn = database.conn;

    const sql = "DROP TABLE `thongbao`";

    conn.execute(sql, (err:QueryError|null, result: ResultSetHeader)=> {
        if(err) console.log(err.message);
        if(result) console.log('`thongbao` Table is deleted');
    })
}