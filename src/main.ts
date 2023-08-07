import express, { Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';

import router from './routes/notesRouter.js';
import { CustomError } from './helpers/HttpError.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'combined';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use('/notes', router);

app.use((req: Request, res: Response) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err: CustomError, req: Request, res: Response) => {
	const { status = 500, message = 'Server error' } = err;
	res.status(status).json({ error: message });
});

export default app;
