import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

import { User } from "../models/user.model";
import {
  userLoginSchema,
  userRegisterSchema,
} from "../validation/userValidation";
import { checkToken } from "../middleware/jwt";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    // Validate the request body using Zod schema
    const validatedData = userRegisterSchema.parse(req.body);

    const emailExists = await User.findOne({email : validatedData.email});

    if(emailExists){
      return res.status(403).json({
        message: "Email id already registered",
      })
    }

    const usernameExists = await User.findOne({ username : validatedData.username})

    if(usernameExists){
      return res.status(403).json({
        message : "Username is taken"
      })
    }

    const user = new User(validatedData);

    const result = user.save();
    res.status(201).json({
      message: "User added successfully",
    });
  } catch (e: any) {
    console.log(e.message);
    res.status(500).json({
      error: e.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const validatedData = userLoginSchema.parse(req.body);
    const { email, password } = validatedData;
    const user = await User.findOne({email});
    console.log(user)
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET as Secret,
      { expiresIn: "2d" }
    );

    res.json({ token, message: "Login successful" });
  } catch (e: any) {
    res.status(500).json({ error: e.message});
  }
});

router.get("/user/:uid", checkToken, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.uid }).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User does not exist.",
      });
    }

    console.log("User found and logged in");

    return res.status(200).json(user);

  } catch (err : any) {
    console.error(err);
    return res.status(500).json({
      error: err.message,
    });
  }
});


export default router;
