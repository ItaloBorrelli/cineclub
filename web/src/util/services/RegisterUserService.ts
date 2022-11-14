import axios from "axios";

const url = "http://localhost:3001/api/user";

const register = async (
  email: string,
  password: string,
  firstname: string,
  lastname?: string
) => {
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
