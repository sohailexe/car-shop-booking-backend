import { Router } from "express";
const router = Router();
import { getAll, createUser } from "../controllers/user.js";

router.get("/", getAll);
router.post("/user", createUser);

export default router;
