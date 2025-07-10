
import { Router } from "express";
import { getInterestedDoctorsController ,getInterestedDoctorProfileController,updateDoctorController} from "../controller/invitedDoctorController.js";
import authorizeAdmin from "../middleware/authorizeAdmin.js";
import { getDoctorProfileController,updateDoctorStatusController } from "../controller/doctorController.js";

const router = Router();

// interested doctors routes
router.get("/interested-doctors",authorizeAdmin(), getInterestedDoctorsController);
router.get("/interested-doctors-profile", authorizeAdmin(), getInterestedDoctorProfileController);
router.put("/interested-doctor-update", authorizeAdmin(), updateDoctorController);

// routed for doctors who are interested in joining the platform(documnts, etc.)

router.get("/doctors-profile", authorizeAdmin(), getDoctorProfileController);
router.put("/update-doctor-profile",authorizeAdmin(),updateDoctorStatusController);

export default router;