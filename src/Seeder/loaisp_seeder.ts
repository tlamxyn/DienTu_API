import database from "../database/database_promises";

export const seedLOAISP = async () => {
  const pool = await database.pool();
  const sql =
    "INSERT INTO `loaisp` (`TenLoai`) " +
    "VALUES " +
    "('Iphone')," +
    "('Ipad')," +
    "('SmartWatch')," +
    "('Android')," +
    "('Laptop');";
  try {
    const result: any = await pool.query(sql);
    console.log(result[0].info);
    console.log('loaisp seeding is completed');
  } catch (err: any) {
    console.log(err.message);
  }
};
