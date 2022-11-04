import { Router } from "express";

import { login } from "../controllers/LoginControl.js";

let router = Router();

router.post("/", login);

export { router };
