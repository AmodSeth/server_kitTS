import { Router } from "express";
import {
  getAllUsers,
  getLogin,
  getSignUp,
} from "../controllers/userController";
import {
  loginValidators,
  signupValidators,
  validate,
} from "../utils/validators";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", validate(signupValidators), getSignUp);
userRouter.post("/login", validate(loginValidators), getLogin);

export default userRouter;
