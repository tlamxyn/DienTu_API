import mysql, {
  QueryError,
  RowDataPacket,
  FieldPacket,
  ResultSetHeader,
} from "mysql2";
import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import { resourceUsage } from "process";
import database from "../Database/database";

export const setTimeZone = function (timezone: string = "+07:00") {
  const conn = database.conn;

  const sql = "SET time_zone=?";

  conn.query(sql, [timezone], (err: QueryError | null, result: any) => {
    if (err) console.log(err.message);

    if (result)
      console.log(
        "Timezone setting success:",
        result.stateChanges.systemVariables.time_zone
      );
  });
};
