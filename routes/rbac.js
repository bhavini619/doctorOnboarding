
import { Router } from "express";
import { getInterestedDoctorsController ,getDoctorProfileController,updateDoctorController} from "../controller/invitedDoctorController.js";
import authorizeAdmin from "../middleware/authorizeAdmin.js";

const router = Router();

router.get("/interested-doctors",authorizeAdmin(), getInterestedDoctorsController);
router.get("/doctors-profile", authorizeAdmin(), getDoctorProfileController);
router.put("/update-doctor", authorizeAdmin(), updateDoctorController);

export default router;