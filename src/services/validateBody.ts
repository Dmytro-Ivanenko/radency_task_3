import HttpError from '../helpers/HttpError.js';
import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const validateBody = (schema: Joi.ObjectSchema) => {
	const func = async (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req.body);
		if (error) {
			next(HttpError(400, error.message));
		}
		next();
	};

	return func;
};

export default validateBody;
