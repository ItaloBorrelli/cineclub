import { model, Schema } from "mongoose";

import { IUserModel } from "types/User";

const UserSchema = new Schema<IUserModel>(
  {
    firstname: { type: String, required: true },
    lastname: { type: String },
    email: { type: String, required: true },
    password_hashed: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel = model("users", UserSchema);

export default UserModel;
