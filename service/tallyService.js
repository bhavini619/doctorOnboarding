import { PrismaClient } from '../generated/prisma/index.js'; 


const prisma = new PrismaClient();

export async function saveWebhookPayload(data) {
  const {name,email,contactno,country,city,state,postalcode} = data;
  if(!name || !email || !contactno || !country || !city || !state || !postalcode) {
    throw new Error('Missing required fields');
  }

  
  // 2. Check if email or contact number already exists
  const existingDoctor = await prisma.interestedDoctor.findFirst({
    where: {
      OR: [
        { email: email },
        { contactno: contactno }
      ]
    }
  });

  if (existingDoctor) {
    throw new Error('Doctor with this email or contact number already exists');
  }


  // Create entry in the InterestedDoctor table
  const result = await prisma.interestedDoctor.create({
    data: {name,email,contactno,country,city,state,postalcode }
  });

  return result; 
}