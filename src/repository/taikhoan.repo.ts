import { ResultSetHeader } from "mysql2";
import database from "../database/database";
import { TaiKhoan } from "../model/taikhoan.model";
import {
  FailCouldNotFind,
  FailDelete,
  FailSQL,
  Success,
} from "../type/response";
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
      return Success(result);
    } catch (err) {
      return FailSQL(err);
    }
  }

  /**
   *
   * @param {number} TaiKhoanID
   * @returns
   */
  static async getTaiKhoanByID(
    TaiKhoanID: number
  ): Promise<Array<TaiKhoan> | any> {
    try {
      const sql = "SELECT * FROM `taikhoan` where `TaiKhoanID` = ?";
      const result = (
        await (await Repo.getPool()).query(sql, [TaiKhoanID])
      )[0] as Array<TaiKhoan>;

      if (result.length === 0) {
        return FailCouldNotFind();
      }
      return Success(result[0]);
    } catch (err) {
      return FailSQL(err);
    }
  }

  /**
   *
   * @param {string} Email
   * @returns
   */
  static async getTaiKhoanByEmail(
    Email: string
  ): Promise<Array<TaiKhoan> | any> {
    try {
      const sql = "SELECT * FROM `taikhoan` where `Email` = ?";
      const result = (
        await (await Repo.getPool()).query(sql, [Email])
      )[0] as Array<TaiKhoan>;

      if (result.length === 0) {
        return FailCouldNotFind();
      }
      return Success(result[0]);
    } catch (err) {
      return FailSQL(err);
    }
  }

  /**
   *
   * @param {string} SDT
   * @returns {any}
   */
  static async getTaiKhoanBySDT(SDT: string): Promise<Array<TaiKhoan> | any> {
    try {
      const sql = "SELECT * FROM `taikhoan` where `SDT` = ?";
      const result = (
        await (await Repo.getPool()).query(sql, [SDT])
      )[0] as Array<TaiKhoan>;

      if (result.length === 0) {
        return FailCouldNotFind();
      }
      return Success(result[0]);
    } catch (err) {
      return FailSQL(err);
    }
  }

  static async deleteTaiKhoan(TaiKhoanID: number): Promise<any> {
    try {
      const taikhoan = await this.getTaiKhoanByID(TaiKhoanID);
      if (taikhoan.data === 0) {
        return FailCouldNotFind();
      }
      const sql = "DELETE FROM `taikhoan` WHERE `TaiKhoanID`=?";
      const result = (
        await (await Repo.getPool()).query(sql, [TaiKhoanID])
      )[0] as ResultSetHeader;

      if (result.affectedRows === 0) {
        return FailDelete();
      }

      return Success(result);
    } catch (err) {
      return FailSQL(err);
    }
  }

  static async createTaiKhoan(
    MatKhau: string,
    Ten: string,
    Email?: string,
    SDT?: string
  ) {
    try {
      const sql =
        "INSERT INTO `taikhoan` (MatKhau, Ten, Email, SDT)" +
        "VALUES" +
        "(?, ?, ?, ?);";
      const result = (
        await (await Repo.getPool()).query(sql, [MatKhau, Ten, Email, SDT])
      )[0];
      return Success(result);
    } catch (err) {
      return FailSQL(err);
    }
  }
}
