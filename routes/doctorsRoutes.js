import { Router } from "express";
const router = Router();
import { createDoctorController,getDoctorProfileController } from "../controller/doctorController.js";


router.post("/create-profile", createDoctorController);
router.get("/profile", getDoctorProfileController);
export default router;