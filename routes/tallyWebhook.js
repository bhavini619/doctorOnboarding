import { Router } from "express";
import { handleTallyWebhook } from "../controller/tallyController.js";

const router = Router();

router.post("/interested-doctors", handleTallyWebhook);

export default router;
