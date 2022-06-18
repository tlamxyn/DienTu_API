import database from "../database/database_promises";

export const seedTAIKHOAN = async () => {
  const pool = await database.pool();
  const sql =
    "INSERT INTO `taikhoan` (`Ten`, `MatKhau`, `NgaySinh`, `DiaChi`, `SDT`, `Email`, `GioiTinh`, `HinhAnh`, `LaAdmin`, `TrangThai`) " +
    "VALUES" +
    "('Lam', '123456', '2001-08-04', '', '0352955767', 'tlamxyn@gmail.com', 0, null, 1, 1)," +
    "('Hùng', '123456', '2000-12-03', '', '345569958', 'hung@gmail.com', 0, null, 0, 1)," +
    "('Sara', '123456', '1999-08-22', 'HCM', '1928333094', 'sara@gmail.com', 2, null, 0, 1)," +
    "('Xuong', '123456', '1998-07-1', 'Hà Nội', '1928333194', 'xuong123a@gmail.com', 1, null, 0, 1)," +
    "('My', '123456', '2003-07-1', 'Quận 1, HCM', '2118333194', 'my123@gmail.com', 2, null, 1, 0)," +
    "('Kieu', '123456', '2001-07-1', 'Quận 2, Hà Nội', '2118366821', 'BKieu@gmail.com', 1, null, 0, 0)," +
    "('Tuan', '123456', '1999-07-1', 'Tân Phú, HCM', '0998333194', 'tuan@gmail.com', 0, null, 0, 0);";
  try {
    const result: any = await pool.query(sql);
    console.log(result[0].info);
    console.log('taikhoan seeding is completed');
  } catch (err: any) {
    console.log(err.message);
  }
};
