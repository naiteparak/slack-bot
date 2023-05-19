import express, { Application } from 'express';
import birthdaysRouter from './routes/birthdays';
import { config } from 'dotenv';
config();

const app: Application = express();
const port = process.env.PORT;

app.use(express.json()).use('/', birthdaysRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost/${port}`);
});
