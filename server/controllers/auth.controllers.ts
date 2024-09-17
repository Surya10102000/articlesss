import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import passport from "passport";

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  let user;
  user = await User.findOne({ email });

  if (user) {
    return res.status(403).json({ message: "Email already exists" });
  }

  user = await User.findOne({ username });

  if (user) {
    return res.status(403).json({ message: "Username already exists" });
  }

  user = await User.create({ email, username, password });
  user.password = "";

  // res.status(200).json({ user })
  req.login(user, (err) => {
    if (err) throw err;
    res.status(201).json({
      user,
      redirect: "/login",
    });
  });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("local", (err: any, user: any, info: any) => {
    if (!user)
      return res.status(401).json({
        message: "email or password is not matched",
      });
    req.login(user, (err) => {
      if (err) throw err;
      res.status(201).json({
        user,
        redirect: "/",
      });
    });
  })(req, res, next);
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
		req.session.destroy(err=>{
      next(err)
    })
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}

  // if (req.session) {
  //   req.logout((err) => {
  //     if (err) {
  //       return next(err); // Handle any error that occurs during logout
  //     }

  //     // Destroy the session after logout
  //     req.session.destroy((err) => {
  //       if (err) {
  //         return next(err); // Handle any error during session destruction
  //       } 

  //       // Clear the session cookie and send response
  //       res.clearCookie("connect.sid", { path: "/" });
  //       return res.status(204).json({ message: "logged out", redirect: "/" });
  //     });
  //   });
  // } else {
  //   return res.status(400).json({ message: "No session found" });
  // }
};

export const me = async (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    res.status(200).json({ user: req.user });
  } else res.status(401).json({ user: null });
};
