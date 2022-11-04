import { Router } from "express";

import { create as createUser } from "../controllers/UserControl.js";

let router = Router();

router.post("/", createUser);

export { router };
