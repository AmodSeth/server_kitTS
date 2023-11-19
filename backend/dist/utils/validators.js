"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupValidators = exports.loginValidators = exports.validate = void 0;
const express_validator_1 = require("express-validator");
const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (result.isEmpty()) {
                break;
            }
        }
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(400).json({ errors: errors.array() });
    };
};
exports.validate = validate;
exports.loginValidators = [
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Please enter a valid email"),
    (0, express_validator_1.body)("Password").trim().isLength({ min: 6 }).withMessage("Please enter a valid password"),
];
//ultimate brain fuck moment
exports.signupValidators = [
    (0, express_validator_1.body)("email").trim().isEmail().withMessage("Please enter a valid email"),
    ...exports.loginValidators
];
//# sourceMappingURL=validators.js.map