import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tallyWebhookRoutes from './routes/tallyWebhook.js';
import rbacRoutes from './routes/rbac.js';
import doctorsRoutes from './routes/doctorsRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tallyWebhook',tallyWebhookRoutes)

app.use("/rbac",rbacRoutes)

app.use('/doctors',doctorsRoutes)




app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});