import express, { Express, Request, Response } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/ErrorHandler";
import { connectDB } from "./config/db";

import authRouter from "./routes/userAuth.routes";

dotenv.config();

connectDB();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger("dev"));

// ROUTES

app.get("/", (req, res) => {
  res.status(201).json({
    message: "Welcome to the API.",
  });
});

app.use("/auth", authRouter);


app.listen(process.env.PORT, () => {
  console.log("Listening to port 3000");
});
