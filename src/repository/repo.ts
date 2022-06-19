import { Pool } from "mysql2/promise";
import { RowDataPacket } from "mysql2/promise";
import database from "../database/database_promises";

export default class Repo {
  public static getPool = async (): Promise<Pool> => {
    const pool = await database.pool();
    return pool;
  };
}
