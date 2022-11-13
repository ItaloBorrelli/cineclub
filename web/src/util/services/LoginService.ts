import axios from "axios";

const url = "http://localhost:3001/api/login";

const login = async (email: string, password: string) => {
  await axios({ method: "POST", url, data: { email, password } })
    .then((res) => {
      console.log(res.data.body);
    })
    .catch((e) => {
      console.error(e);
    });
};

export { login };
