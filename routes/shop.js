import { Router } from "express";
const router = Router();
import { getAll } from "../controllers/shop.js";

router.get("/", getAll);

export default router;
