import axios from "axios";

import Environment from "../Environment";

const url = `${Environment.URL}/user`;

const register = async (
  email: string,
  password: string,
  firstname: string,
  lastname?: string
) => {
  console.log(url);
  await axios
    .post(url, { email, password, firstname, lastname })
    .then((res) => {
      console.log(res.data.body);
    })
    .catch((e) => {
      console.error(e);
    });
};

export { register };
