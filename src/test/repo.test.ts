import Repo from "../repository/repo";
import TaiKhoanRepo from "../repository/taikhoan.repo";

const test = async () => {
const result1 = await TaiKhoanRepo.getTable();
console.log(result1);
}

test();