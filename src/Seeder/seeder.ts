import { seedLOAISP } from "./loaisp_seeder";
import { seedTAIKHOAN } from "./taikhoan_seeder";
import { seedSANPHAM } from "./sanpham_seeder";
import {seedGIOHANG} from './giohang_seeder';
import { seedTHONGBAO } from "./thongbao_seeder";
import { seedHOADON } from "./hoadon_seeder";
import { seedDANHGIA } from "./danhgia_seeder";
import { seedCHITIETHOADON } from "./chitiethoadon_seeder";
const seeder = async () => {

await seedLOAISP();
await seedSANPHAM();
await seedTAIKHOAN();
await seedDANHGIA();
await seedHOADON();
await seedCHITIETHOADON();
await seedGIOHANG();
await seedTHONGBAO();
await process.exit();
};
seeder();