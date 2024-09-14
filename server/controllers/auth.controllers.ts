import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import passport from "passport";

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  let user;
  user = await User.findOne({ email });
  
  if(user) {
    return res.status(403).json({ message: "Email already exists" });
  }
  console.log("1")
  
  user = await User.findOne({ username });

  if (user) {
    return res.status(403).json({ message: "Username already exists" });
  }

  user = await User.create({ email, username, password });
  
    // res.status(200).json({ user })
  req.login(user, (err) => {
    if (err) throw err;
    res.status(201).json({
      user,
      redirect : "/login"
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
        redirect : "/"
      });
    });
  })(req, res, next);
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.logOut;
  
  req.session.destroy((err)=>{
      res.clearCookie("connect.sid")
      res.status(204).send("logged out")
  })
};

export const me = async (req: Request, res: Response , next : NextFunction) => {
    if(req.isAuthenticated()) res.status(200).json({user : req.user})
        else res.status(401).json({user : null})
};
