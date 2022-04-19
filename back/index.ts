import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import searchRouter from './routes/searchRouter'

dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/search", searchRouter);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
