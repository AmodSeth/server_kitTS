import { Request, NextFunction, Response } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

export const validate = (validations:ValidationChain[])=>{
    return async (req:Request,res:Response,next:NextFunction)=>{
      for(let validation  of validations){
            const result=await validation.run(req);
            if(result.isEmpty()){
                break;
            }
      }
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }

       return res.status(400).json({errors:errors.array()});
    }


}
export const loginValidators=[

    body("email").trim().isEmail().withMessage("Please enter a valid email"),
    body("Password").trim().isLength({min:6}).withMessage("Please enter a valid password"),
]


//ultimate brain fuck moment
export const signupValidators=[

    body("email").trim().isEmail().withMessage("Please enter a valid email"),
   ...loginValidators
]