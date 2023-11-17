import {Router} from "express";
import { getAllUsers } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/",(req,res)=>{
    res.send("user router is called");
});


export default userRouter;
