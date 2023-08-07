import Joi from 'joi';

const noteValidateSchema = Joi.object({
	id: Joi.string().required(),
	name: Joi.string().required(),
	createdAt: Joi.string().required(),
	content: Joi.string().required(),
	category: Joi.string().required(),
	status: Joi.string().valid('active', 'archived').required(),
});

export { noteValidateSchema };
