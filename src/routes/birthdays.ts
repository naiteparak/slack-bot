import { Request, Response, Router } from 'express';
import birthdays from '../json/birthdays.json';

const birthdaysRouter = Router();

birthdaysRouter.post('/getbd', (req: Request, res: Response) => {
  res.status(200).json(birthdays);
});

export default birthdaysRouter;
