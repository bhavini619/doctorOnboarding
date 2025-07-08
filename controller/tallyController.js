
import { saveWebhookPayload } from '../service/tallyService.js';

async function handleTallyWebhook(req, res) {
  const data = req.body;
  console.log("Received data:", data);
  try {
    await saveWebhookPayload(data);
    res.status(200).json(
      successResponse('', 'Webhook received and saved successfully')
    );
  } catch (error) {
    res.status(500).json(
      errorResponse('Failed to save webhook data', error.message, 500, 'DB_ERROR')
    );
  }
};




export { handleTallyWebhook };