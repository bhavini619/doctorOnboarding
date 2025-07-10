import { PrismaClient } from '../generated/prisma/index.js'; 

const prisma = new PrismaClient();

async function createDoctor(doctorData) {
  const {name,specialization,email,phone,status = 'IN_PROGRESS',interactionMode = 'ONLINE' } = doctorData;

  if (!name || !specialization || !email || !phone) {
    throw new Error('Missing required fields');
  }

  // Optional: Check for existing doctor with same email or phone
  const existingDoctor = await prisma.doctor.findFirst({
    where: {
      OR: [
        { email },
        { phone }
      ]
    }
  });

  if (existingDoctor) {
    throw new Error('Doctor with same email or phone already exists');
  }

  const newDoctor = await prisma.doctor.create({
    data: { name, specialization, email, phone, status, interactionMode
    }
  });

  return newDoctor;
}

async function getDoctorProfileService(doctorId) {
  const doctor = await prisma.doctor.findUnique({
    where: { id: Number(doctorId) }
  });

  return doctor;
}

async function updateDoctorByAdmin(doctorId, updates) {
  const doctor = await prisma.doctor.update({
    where: { id: Number(doctorId) },
    data: updates
  });

  return doctor;
}
export {createDoctor, getDoctorProfileService,updateDoctorByAdmin}
