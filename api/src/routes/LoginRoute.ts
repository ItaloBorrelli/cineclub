import { Router } from "express";

import { login } from "controllers/LoginControl";

let router = Router();

router.post("/", login);

export { router };
