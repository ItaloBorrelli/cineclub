import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import UserModel from "models/UserModel";

declare module "jsonwebtoken" {
  export interface IUserIdJwtPayload extends jwt.JwtPayload {
    userId: string;
  }
}

const invalidEmailOrPassword = (res: Response) => {
  res.status(403).json({
    success: false,
    message: "You have entered an invalid email or password",
  });
};

const login = async (
  req: Request<{}, {}, { email?: string; password?: string }>,
  res: Response
) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return invalidEmailOrPassword(res);
  }

  UserModel.findOne({ email }).exec(async (e, user) => {
    if (e) {
      console.error(e);
    }
    if (e || !user) {
      return invalidEmailOrPassword(res);
    }
    await bcrypt
      .compare(password, user.password_hashed)
      .then((result) => {
        if (!result) {
          return invalidEmailOrPassword(res);
        }

        const accessToken = jwt.sign(
          { userId: user._id },
          process.env.ACCESS_TOKEN_SECRET!
        );
        return res.status(201).json({ accessToken });
      })
      .catch((e) => {
        console.error(e);
        return res.status(500);
      });
  });
};

export { login };
