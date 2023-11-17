import { Router } from "express";
import userRouter  from "./user.routes";

const apiRouter = Router();

//use this file as a middleware router for all routes
apiRouter.use("/user",userRouter);


export default apiRouter;