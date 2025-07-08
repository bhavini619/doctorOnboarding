
import { Router } from "express";
import { getInterestedDoctorsController ,getDoctorProfileController} from "../controller/invitedDoctorController.js";
import authorizeAdmin from "../middleware/authorizeAdmin.js";

const router = Router();

router.get("/interested-doctors",authorizeAdmin(), getInterestedDoctorsController);
router.get("/doctors-profile", authorizeAdmin(), getDoctorProfileController);

export default router;