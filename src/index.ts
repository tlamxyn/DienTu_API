import express, { Express, Request, Response  } from "express";
import dotenv from "dotenv";
import router from "./router/index.router";
import cors from 'cors';

dotenv.config();

const app : Express = express();
const port = process.env.PORT || 4001;
const host = process.env.HOST || 'localhost';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}/`)
})