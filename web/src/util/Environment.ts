const API_HOST = process.env.REACT_APP_API_HOST!;
const API_PORT = process.env.REACT_APP_API_PORT!;

const Environment = {
  URL: `http://${API_HOST}:${API_PORT}`,
};

export default Environment;
