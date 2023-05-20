import express, { Application } from 'express';
import birthdaysRouter from './routes/birthdays-route';
import { config } from 'dotenv';
import { setupCronJob } from './utils/cron-job';
config();

const app: Application = express();
const port = process.env.PORT;

app.use(express.json()).use('/', birthdaysRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

setupCronJob();
