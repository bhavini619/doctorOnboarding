import { createDoctor,getDoctorProfileService,updateDoctorByAdmin } from '../service/doctorService.js';
import { successResponse, errorResponse } from '../utils/response.js';

async function createDoctorController(req, res) {
  try {
    const newDoctor = await createDoctor(req.body);
    return res.status(201).json(
      successResponse(newDoctor, 'Doctor created successfully', 201)
    );
  } catch (err) {
    return res.status(500).json(
      errorResponse('Failed to create doctor', err.message, 500, 'DB_ERROR')
    );
  }
}

async function getDoctorProfileController(req, res) {
  const doctorId = req.query.id;
  if (!doctorId) {
    return res.status(400).json(
      errorResponse('Doctor ID is required', '', 400, 'MISSING_ID')
    );
  }

  try {
    const doctorProfile = await getDoctorProfileService(doctorId);
    if (!doctorProfile) {
      return res.status(404).json(
        errorResponse('Doctor not found', '', 404, 'NOT_FOUND')
      );
    }
    return res.status(200).json(
      successResponse(doctorProfile, 'Doctor profile retrieved successfully', 200)
    );
  } catch (err) {
    return res.status(500).json(
      errorResponse('Failed to retrieve doctor profile', err.message, 500, 'DB_ERROR')
    );
  }
}

async function updateDoctorStatusController(req, res) {
  try {
    const { doctor_id, ...updates } = req.body;

    if (!doctor_id) {
      return res.status(400).json(
        errorResponse('doctor_id is required', '', 400, 'MISSING_ID')
      );
    }

    const updatedDoctor = await updateDoctorByAdmin(doctor_id, updates);

    return res.status(200).json(
      successResponse(updatedDoctor, 'Doctor profile updated successfully', 200)
    );
  } catch (err) {
    return res.status(500).json(
      errorResponse('Failed to update doctor profile', err.message, 500, 'DB_ERROR')
    );
  }
}
export { createDoctorController, getDoctorProfileController , updateDoctorStatusController};
