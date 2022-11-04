import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

import UserModel from "../models/user-model.js";

config();

const invalidEmailOrPassword = (res: express.Response) => {
  res.status(404).json({
    success: false,
    message: "You have entered an invalid email or password",
  });
};

const noTokenSecret = (res: express.Response) => {
  console.error("Couldn't get ACCESS_TOKEN_SECRET");
  res.status(500).json({
    success: false,
    message: "Could not create token for login",
  });
};

const login = async (
  req: express.Request<{}, {}, { email?: string; password?: string }>,
  res: express.Response
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

        const accessSecret = process.env.ACCESS_TOKEN_SECRET;
        if (!accessSecret) return noTokenSecret;

        const accessToken = jwt.sign({ name: email }, accessSecret);
        return res.status(201).json({ accessToken });
      })
      .catch((e) => {
        console.error(e);
        return res.status(500);
      });
  });
};

export { login };
