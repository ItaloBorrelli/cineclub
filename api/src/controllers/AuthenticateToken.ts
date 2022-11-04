import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import { IGetUserAuthInfoRequest } from "../types/RequestInterface";

declare module "jsonwebtoken" {
  export interface IUserIdJwtPayload extends jwt.JwtPayload {
    userId: string;
  }
}

const authenticateToken = (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  try {
    const { userId } = <jwt.IUserIdJwtPayload>(
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)
    );
    req.userId = userId;
    next();
  } catch (e) {
    return res.sendStatus(403);
  }
};

export default authenticateToken;
