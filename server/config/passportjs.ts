import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import { Express } from "express";

export default function (app: Express) {
  app.use(cookieParser());
  app.use(
    session({
      secret: "somthing good",
      resave: false,
      saveUninitialized: false,
      name: "sid",
      cookie: {
        httpOnly: true,
        maxAge: 48 * 60 * 60 * 1000,
      },
    })
  );

  passport.serializeUser((user: any, done) => {
    done(null, user._id);
  });

  passport.use(
    new LocalStrategy(async (email: string, password, done) => {
      const errorMsg = "Invalid email or password";
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: "User not found." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return done(null, false, { message: "Invalid Password" });
        }

        return done(null, user);
      } catch (error) {
        console.log(error);
      }
    })
  );

  app.use(passport.initialize());

  app.use(passport.session());
}
