import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3001;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/getBeer", (req: Request, res: Response) => {
  const body = { text: "Ехали медведи на велосипеде" };
  res.send(JSON.stringify(body));
});

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
