import { Response, Request, NextFunction } from "express";
import User from "./../models/user.model";
import { compare, hash } from "bcrypt";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    return res.status(200).json({
        
      success: true,
      length: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
    });
  }
};


//### POST
export const getSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password } = req.body;
    //exitsing user
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(401).json({
            success: false,
            data: "user with same email already exist"
        })
    }


    const hashedPassword = await hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: error,
    });
  }
};

// ### Post
export const getLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
        //only with email and password

        const {email,password}=req.body;
        //filter it with email
        const user = await User.findOne({email});
        if (!user) {
            return res.status(401).json({
                success: false,
                data: "user not found"
            })
        }
        //check password
        const isMatch = await compare(password,user.password);
        if(!isMatch){
            return res.status(403).json({
                success: false,
                data: "invalid credentials"
            })
        }
        //if all good
        return res.status(200).json({
            success: true,
            data: user,
          });



  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: error,
    });
  }
};
