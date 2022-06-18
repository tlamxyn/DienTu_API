import database from "../database/database_promises";

export const seedCHITIETHOADON = async () => {
  const pool = await database.pool();
  const sql =
    "INSERT INTO `chitiethoadon`(`HoaDonID`, `SanPhamID`, `SoLuong`, `GiaMua`)" +
    "VALUES " +
    "(1, 1, 1, 6000000)," +
    "(1, 2, 1, 2000000)," +
    "(2, 3, 1, 1000000)," +
    "(3, 4, 3, 3000000)," +
    "(4, 5, 1, 3500000)," +
    "(4, 6, 2, 4700000);";
  try {
    const result: any = await pool.query(sql);
    console.log(result[0].info);
    console.log('chitiethoadon seeding is completed');
  } catch (err: any) {
    console.log(err.message);
  }
};
