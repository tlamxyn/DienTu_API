import database from "../Database/database_promises";

export const seedSANPHAM = async () => {
  const pool = await database.pool();
  // Sản phẩm có 7 loại khác nhau
  const sql =
    "INSERT INTO `sanpham` (`TenSP`, `DonGia`, `DonGiaGiam`, `HangTonKho`, `MoTa`, `LoaiSPID`, `HinhAnh`)" +
    "VALUES" +
    "('IPhone A35 MaxPro', 6000000, 15, 32, '{Description: \"Không thể vượt qua\", Color: \"white\"}', 1, null)," +
    "('iPad Gen 9', 2000000, 15, 21, '{Description: \"Chạy hơi bị mượt\", Color: \"Black\"}', 2, null)," +
    "('Apple Watch series 7', 1000000, 15, 18, '{Description: \"Xấu không thể tả\"}, Color: \"Black\"', 3, null)," +
    "('Samsum Galaxy F7', 3000000, 15, 61, '{Description: \"Chậm như ánh sáng\"}, Color: \"white\"', 4, null)," +
    "('Mac Mini MD298', 3500000, 15, 22, '{Description: \"Chơi game là nhất\"}, Color: \"Neon\"', 5, null)," +
    "('Apple Ipad mini 4', 4700000, 15, 17, '{Description: \"Mỏng manh dễ vỡ\"}, Color: \"white\"', 2, null)," +
    "('Apple Iphone 13 Pro', 29000000, 15, 7, '{Description: \"Xuyên qua thời gian\"}, Color: \"Brown\"', 1, null)," +
    "('Smotchm IO 13 Pro', 12000000, 15, 34, '{Description: \"Mùa thu gió bay\"}, Color: \"Red\"', 3, null)," +
    "('Google Pixel 4XL', 15000000, 15, 770, '{Description: \"Cần một tấm lòng\"}, Color: \"Brown\"', 4, null);";
  try {
    const result: any = await pool.query(sql);
    console.log(result[0].info);
    console.log('sanpham seeding is completed');
  } catch (err: any) {
    console.log(err.message);
  }
};
