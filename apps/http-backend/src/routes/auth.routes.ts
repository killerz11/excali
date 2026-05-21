import { Router } from "express";
import { room, signin, signup } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router:Router = Router();

router.post("/signup", signup);
router.post("signin", signin);
router.post("/room", authMiddleware, room);

export default router;