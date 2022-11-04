interface IUser {
  firstname: string;
  lastname?: string;
  email: string;
}

interface IUserModel extends IUser {
  password_hashed: string;
}

interface IUserReqBody extends IUser {
  password: string;
}

export { type IUserModel, type IUserReqBody };
