import { Router } from "express";
const router = Router();
import { getAll } from "../controllers/user.js";

router.get("/", getAll);

export default router;
