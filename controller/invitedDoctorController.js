import { getInterestedDoctors, getDoctorProfile } from "../service/invitedDoctorService.js";
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
async function getDoctorProfileController(req, res) {
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

export { getInterestedDoctorsController, getDoctorProfileController };