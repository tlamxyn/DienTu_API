import { ResultSetHeader } from "mysql2";
import { TaiKhoan } from "../model/taikhoan.model";
import Repo from "./repo";

/**
 * @descripton
 * The retur value of all method in `TaiKhoanRepo` class always is:
 *  - Have `success` property with Boolean type </br>
 *  - Have `deletedRows` if method is use for[delete one row or many row]
 *  - Have `changedRows` if method is use for[update(edit) one row or many rows]
 *  - Have `data` if method is use for [get a number of records or create a record]
 *  - Have `dataExist` if it can't find out any records match params
 */

export default class TaiKhoanRepo {
  /**
   * This function use for get all the records of table TaiKhoan
   * @returns
   */
  static async getTable(): Promise<Array<TaiKhoan> | any> {
    try {
      const sql = "SELECT * FROM `taikhoan`";
      const result = (
        await (await Repo.getPool()).query(sql)
      )[0] as Array<TaiKhoan>;
      return result;
    } catch (err) {
      let error = err as any;
      return {
        success: false,
        code: error.code,
        sql: error.sql,
        sqlMessage: error.sqlMessage,
      };
    }
  }

  /**
   * This fuction use for get and account that match id with `TaiKhoanID`
   * @param TaiKhoanID
   * @returns
   */
  static async getTaiKhoan(TaiKhoanID: number): Promise<Array<TaiKhoan> | any> {
    try {
      const sql = "SELECT * FROM `taikhoan` where `TaiKhoanID` = ?";
      const result = (
        await (await Repo.getPool()).query(sql, [TaiKhoanID])
      )[0] as Array<TaiKhoan>;

      if (result.length === 0) {
        return {
          success: false,
          data: 0,
        };
      }

      return {
        success: true,
        data: result[0],
      };
    } catch (err) {
      let error = err as any;
      return {
        success: false,
        code: error.code,
        sql: error.sql,
        sqlMessage: error.sqlMessage,
      };
    }
  }
//   static async deleteTaiKhoan(TaiKhoanID: number): Promise<any> {
//     try {
//         const taikhoan = await this.getTaiKhoan(TaiKhoanID);
//         if(taikhoan.data === 0) {
//             return {
//                 success: false,
//                 dataExist: false
//             }
//         }
//       const sql = "DELETE FROM `taikhoan` WHERE `TaiKhoanID`=?";
//       const result = (
//         await (await Repo.getPool()).query(sql, [TaiKhoanID])
//       )[0] as ResultSetHeader;

//       if (result.affectedRows === 0) {
//         return {
//           success: false,
//           deletedRows: 0,
//         };
//       }

//       return {
//         success: true,
//         message: `Deleted an account with id = ${TaiKhoanID}`,
//       };
//     } catch (err) {
//       let error = err as any;
//       return {
//         success: false,
//         code: error.code,
//         sql: error.sql,
//         sqlMessage: error.sqlMessage,
//       };
//     }
//   }
  static async editTaiKhoan() {}
}
