import { getInterestedDoctors, getDoctorProfile,updateDoctorService } from "../service/invitedDoctorService.js";
import { successResponse, errorResponse } from '../utils/response.js';

async function getInterestedDoctorsController(req, res) {
    try {

        const result = await getInterestedDoctors();
        res.status(200).json(successResponse(result, 'Interested doctors fetched successfully'));


    } catch (err) {
        res.status(500).json(
            errorResponse('Failed to fetch interested doctors', err.message, 500, 'DB_ERROR')
        );
    }

};
async function getInterestedDoctorProfileController(req, res) {
    const doctorId = req.query.doctor_id;

    try {
        const result = await getDoctorProfile(doctorId);

        res.status(200).json(
            successResponse(result, 'Doctor profile fetched successfully'));
    } catch (err) {
        res.status(404).json(
            errorResponse('Doctor profile not found', err.message, 404, 'NOT_FOUND')
        );
    }
}

async function updateDoctorController(req, res) {
    console.log("updateDoctorController called with body:", req.body);
    try {
    const { doctor_id, ...updates } = req.body;
    console.log("doctor_id", doctor_id);

    if (!doctor_id) {
      return res.status(400).json(
        errorResponse('doctor_id is required', '', 400, 'MISSING_ID')
      );
    }

    const updated = await updateDoctorService(doctor_id, updates);

    return res.status(200).json(
      successResponse(updated, 'Doctor profile updated successfully', 200)
    );
  } catch (err) {
    return res.status(500).json(
      errorResponse('Failed to update doctor profile', err.message, 500, 'DB_ERROR')
    );
  }
}

export { getInterestedDoctorsController, getInterestedDoctorProfileController, updateDoctorController };