import cron from 'node-cron';
import axios from 'axios';
import { sendMessageToUsers } from './send-message';

export const setupCronJob = async function () {
  const task = cron.schedule('*/10 * * * * *', async () => {
    try {
      const response = await axios.post(
        `http://localhost:${process.env.PORT}/getbd`,
      );
      await sendMessageToUsers(response.data);
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Error:', error);
    }

    task.start();
  });
};
