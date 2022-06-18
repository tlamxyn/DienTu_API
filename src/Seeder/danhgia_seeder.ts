import database from "../Database/database_promises";

export const seedDANHGIA = async () => {
  const pool = await database.pool();
  const sql =
    "INSERT INTO `danhgia`(`TaiKhoanID`, `SanPhamID`, `SoSao`, `NoiDung`)" +
    "VALUES " +
    "(1, 1, 5, 'Sản phẩm Fucking awesome')," +
    "(2, 3, 4, 'Làm thế nào nó tuyệt vời thế này')," +
    "(3, 4, 3, 'supper kimochi')," +
    "(4, 5, 4, 'あのなんですか')," +
    "(4, 6, 3, '내ㅐ처ㅐ쟈댜ㅓㄴㅇㅁㄻㄴㄻㄴㅇ');";
  try {
    const result: any = await pool.query(sql);
    console.log(result[0].info);
    console.log('danhgia seeding is completed');
  } catch (err: any) {
    console.log(err.message);
  }
};
