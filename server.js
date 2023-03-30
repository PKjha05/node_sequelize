import express, { Router } from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/test", router);

export default app;
