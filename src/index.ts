import express from 'express';
import { Request, Response, NextFunction } from 'express';
import logger from 'morgan';
import cors from 'cors';

import router from './routes/notesRoutter.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'combined';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use('/notes', router);

app.use((req, res) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
	const { status = 500, message = 'Server error' } = err;
	res.status(status).json({ message });
});

module.exports = app;
