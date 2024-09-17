import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import passport from "passport";

// Signup Controller with Try-Catch
export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    let user;

    // Check if email already exists
    user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({ message: "Email already exists" });
    }

    // Check if username already exists
    user = await User.findOne({ username });
    if (user) {
      return res.status(403).json({ message: "Username already exists" });
    }

    // Create a new user
    user = await User.create({ email, username, password });
    user.password = ""; // Remove password from the response

    // Log the user in
    req.login(user, (err) => {
      if (err) throw err;
      return res.status(201).json({
        user,
        redirect: "/login",
      });
    });
  } catch (error) {
    console.error("Error in signup controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login Controller with Try-Catch
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) {
        console.error("Error in login authentication:", err);
        return next(err);
      }
      if (!user) {
        return res.status(401).json({
          message: "email or password is not matched",
        });
      }

      req.login(user, (err) => {
        if (err) {
          console.error("Error in login session:", err);
          return next(err);
        }
        return res.status(201).json({
          user,
          redirect: "/",
        });
      });
    })(req, res, next);
  } catch (error) {
    console.error("Error in login controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Logout Controller with Try-Catch
export const logout = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user) {
      req.session.destroy((err) => {
        if (err) {
          console.error("Error in session destroy:", err);
          return next(err);
        }
      });
      res.clearCookie("connect.sid"); // Clear session cookie
      return res.json({ msg: "logging you out" });
    } else {
      return res.json({ msg: "no user to log out!" });
    }
  } catch (error) {
    console.error("Error in logout controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Me Controller with Try-Catch
export const me = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.isAuthenticated()) {
      return res.status(200).json({ user: req.user });
    } else {
      return res.status(401).json({ user: null });
    }
  } catch (error) {
    console.error("Error in me controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
