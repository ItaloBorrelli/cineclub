import express from "express";

import { create as createUser } from "../controllers/user-ctrl.js";

let router = express.Router();

router.post("/", createUser);

export { router };
