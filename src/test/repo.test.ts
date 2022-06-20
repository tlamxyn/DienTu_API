import Repo from "../repository/repo";
import TaiKhoanRepo from "../repository/taikhoan.repo";

const test = async () => {
const result1 = await TaiKhoanRepo.deleteTaiKhoan(11);
console.log(result1);
}

test();