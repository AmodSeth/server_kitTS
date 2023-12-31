"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const apiRouter = (0, express_1.Router)();
//use this file as a middleware router for all routes
apiRouter.use("/user", user_routes_1.default);
exports.default = apiRouter;
//# sourceMappingURL=index.js.map