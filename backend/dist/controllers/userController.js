"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogin = exports.getSignUp = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("./../models/user.model"));
const bcrypt_1 = require("bcrypt");
const getAllUsers = async (req, res, next) => {
    try {
        const users = await user_model_1.default.find();
        return res.status(200).json({
            success: true,
            length: users.length,
            data: users,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
        });
    }
};
exports.getAllUsers = getAllUsers;
//### POST
const getSignUp = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        //exitsing user
        const existingUser = await user_model_1.default.findOne({ email });
        if (existingUser) {
            return res.status(401).json({
                success: false,
                data: "user with same email already exist"
            });
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const user = await user_model_1.default.create({
            username,
            email,
            password: hashedPassword,
        });
        return res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: error,
        });
    }
};
exports.getSignUp = getSignUp;
// ### Post
const getLogin = async (req, res, next) => {
    try {
        //only with email and password
        const { email, password } = req.body;
        //filter it with email
        const user = await user_model_1.default.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                data: "user not found"
            });
        }
        //check password
        const isMatch = await (0, bcrypt_1.compare)(password, user.password);
        if (!isMatch) {
            return res.status(403).json({
                success: false,
                data: "invalid credentials"
            });
        }
        //if all good
        return res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: error,
        });
    }
};
exports.getLogin = getLogin;
//# sourceMappingURL=userController.js.map