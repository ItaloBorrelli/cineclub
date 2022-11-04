import express from "express";

import { login } from "../controllers/login-ctrl.js";

let router = express.Router();

router.post("/", login);

export { router };
