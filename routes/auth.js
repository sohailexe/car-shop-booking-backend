import { Router } from "express";
const router = Router();
import { getAll } from "../controllers/auth.js";

router.get("/", getAll);

export default router;
