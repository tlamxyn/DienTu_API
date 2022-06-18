import database from "../database/database_promises";

export const seedTHONGBAO = async () => {
  const pool = await database.pool();
  const sql =
    "INSERT INTO `thongbao`(`TieuDe`, `TieuDeCon`, `Ngay`, `NoiDung`, `TaiKhoanID`, `URL`)" +
    "VALUES" +
    "('Sale Sốc', null, '2022-06-05', 'Chúng tôi tính sale cho bạn 100% toàn bộ sản phẩm, miễn phí cho bạn', 1, null)," +
    "('Sale Hơi Sốc', null, '2022-06-05', 'Chúng tôi tính sale cho bạn 200% toàn bộ sản phẩm, tặng cho bạn thêm tiền', 2, null)," +
    "('Bạn có nợ', null, '2022-06-05', 'Lo trả đi', 3, null)," +
    "('Nợ một đống', null, '2022-06-05', 'Kho báu hải tặc tọa độ là gì', 6, null)," +
    "('Đang giao hàng', null, '2022-06-05', 'Hàng đang giao, lo mà nhận đi', 7, null);";
  try {
    const result: any = await pool.query(sql);
    console.log(result[0].info);
    console.log('thongbao seeding is completed');
  } catch (err: any) {
    console.log(err.message);
  }
};
