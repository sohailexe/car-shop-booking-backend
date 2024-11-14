import { Router } from "express";
const router = Router();
import { getAll } from "../controllers/booking.js";

router.get("/", getAll);

export default router;
