import { PrismaClient } from '../generated/prisma/index.js'; 

const prisma = new PrismaClient();

const getInterestedDoctors = async () => {

    const doctors = await prisma.interestedDoctor.findMany();
    if(!doctors || doctors.length === 0) {
        throw new Error('No interested doctors found');
    }

    return doctors;
 
}
async function getDoctorProfile(doctor_id) {
  const id = parseInt(doctor_id);
  if (isNaN(id)) {
    throw new Error('Invalid doctor ID');
  }

  const doctor = await prisma.interestedDoctor.findUnique({
    where: { id }
  });

  if (!doctor) {
    throw new Error('Doctor not found');
  }

  return doctor;
}

export { getInterestedDoctors, getDoctorProfile };