import database from "../database/database_promises";

export const seedGIOHANG = async () => {
  const pool = await database.pool();
  const sql =
    "INSERT INTO `giohang`(`TaiKhoanID`, `SanPhamID`, `SoLuong`) " +
    "VALUES " +
    "(1, 1, 1)," +
    "(3, 2, 1)," +
    "(2, 3, 1)," +
    "(4, 2, 3)," +
    "(5, 3, 1)," +
    "(6, 6, 2);";
  try {
    const result: any = await pool.query(sql);
    console.log(result[0].info);
    console.log('giohang seeding is completed');
  } catch (err: any) {
    console.log(err.message);
  }
};
