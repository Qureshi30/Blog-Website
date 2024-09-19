import express from 'express';
import cors from "cors";
import compression from "compression";
import { initDb } from "./db/index.js";
import routes from "./routes.js";

import dotenv from "dotenv";
dotenv.config();

initDb();

const app = express();

app.use(compression());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);


app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});
