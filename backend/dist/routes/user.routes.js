"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const validators_1 = require("../utils/validators");
const userRouter = (0, express_1.Router)();
userRouter.get("/", userController_1.getAllUsers);
userRouter.post("/signup", (0, validators_1.validate)(validators_1.signupValidators), userController_1.getSignUp);
userRouter.post("/login", (0, validators_1.validate)(validators_1.loginValidators), userController_1.getLogin);
exports.default = userRouter;
//# sourceMappingURL=user.routes.js.map