import { Router } from "express";
const router = Router();
import { getAll } from "../controllers/service.js";

router.get("/", getAll);

export default router;
