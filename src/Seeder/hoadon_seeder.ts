import database from "../database/database_promises";

export const seedHOADON = async () => {
  const pool = await database.pool();
  const sql =
    "INSERT INTO `hoadon`(`TaiKhoanID`, `NgayLap`, `DiaChiNhan`, `SDTNhan`, `TongThanhToan`)" +
    "VALUES " +
    "(1, '2022-06-18', 'HCM', '0352955767', 0)," +
    "(2, '2022-06-18', 'HCM', '345569958', 0)," +
    "(3, '2022-06-18', 'HCM', '1928333094', 0)," +
    "(4, '2022-06-18', 'HCM', '1928333194', 0);";
  try {
    const result: any = await pool.query(sql);
    console.log(result[0].info);
    console.log('hoadon seeding is completed');
  } catch (err: any) {
    console.log(err.message);
  }
};
