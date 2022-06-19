import { Router } from "express";

const routerSelf = Router();

routerSelf.get('/'); // --> Trả về thông tin cá nhân của admin
routerSelf.post('/'); // --> update thông tin cá nhân cơ bản của admin
routerSelf.post('/password'); // --> Cập nhật password cho admin
routerSelf.get('/image'); // --> Trả về ảnh bản thân

export default routerSelf;