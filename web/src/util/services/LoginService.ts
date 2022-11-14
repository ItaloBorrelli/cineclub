import axios from "axios";

import Environment from "../Environment";

const url = `${Environment.URL}/login`;

const login = async (email: string, password: string) => {
  await axios
    .post(url, { email, password })
    .then((res) => {
      console.log(res.data.body);
    })
    .catch((e) => {
      console.error(e);
    });
};

export { login };
