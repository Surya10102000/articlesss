import express from "express";
import { login, logout, me, signup } from "../controllers/auth.controllers";
import { validateData } from "../middleware/Validation.middleware";
import { userLoginSchema, userRegisterSchema } from "../validation/userValidation";

const router = express.Router();

router.post('/signup', validateData(userRegisterSchema), signup);
router.post('/login',validateData(userLoginSchema), login);
router.delete('/logout', logout)
router.get('/me', me)

export default router 