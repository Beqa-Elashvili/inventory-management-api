import { Router } from "express";
import { getUsers } from "../controllers/userContreller";

const router = Router();

router.get("/", getUsers);

export default router;
