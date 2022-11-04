import e, { Request, Response } from "express";

import bcrypt from "bcrypt";

import UserModel from "../models/UserModel.js";

import { IUserModel, IUserReqBody } from "types/User";

const create = async (req: Request<{}, {}, IUserReqBody>, res: Response) => {
  let user: IUserModel;
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user = { ...req.body, password_hashed: hashedPassword };
  } catch {
    return res.status(400).json({ success: false, message: "couldn't save" });
  }

  new UserModel(user).save((e, newUser) => {
    if (e) {
      return res.status(400).json({ success: false, message: e.message });
    }
    res.status(200).json({
      success: true,
      id: newUser._id,
      message: "User created",
    });
  });
};

export { create };
