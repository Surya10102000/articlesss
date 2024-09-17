import express, { Express, Request, Response } from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import cors from "cors";
import session from "express-session";

import authRoutes from "./routes/auth.routes";
import passport from "./middleware/passport.middleware";
import MongoStore from "connect-mongo";
dotenv.config();

const corsOptions ={
  origin:'http://localhost:5173', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(
  session({
    secret:  process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName : "sessions"
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/api/demo", (req, res) => {
  res.json({ sessionId: req.sessionID });
  console.log(req.isAuthenticated(), req.user);
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Listening to port 3000");
});
