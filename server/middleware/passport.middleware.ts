import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/user.model";
import { Request } from "express";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      try {
        if (!user) {
          return done(null, false);
        }
        //@ts-ignore
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          return done(null, user);
        } else return done(null, false);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  return done(null, user._id);
});

passport.deserializeUser(async (req: Request, id: string, done: any) => {
  try {
    const user = await User.findById(id);

    if (user === null) {
      return done(null, false);
    } else {
      user.password = ""
      return done(null, user);
    }
  } catch (error) {
    return done(error);
  }
});

export default passport;
