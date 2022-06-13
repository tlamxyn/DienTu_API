import express, { Express, Request, Response  } from "express";
import dotenv from "dotenv";

dotenv.config();

const app :Express = express();
const port = process.env.PORT || 4001;
const host = process.env.HOST || 'localhost';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req : Request, res : Response) => {
    res.json({
        status: 200,
        message: "hello"
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}/`)
})