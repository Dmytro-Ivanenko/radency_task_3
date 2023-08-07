interface CustomError extends Error {
	status: number;
}

interface ErrorMessages {
	[status: number]: string;
}

const errorMessages: ErrorMessages = {
	400: 'Bad request',
	401: 'Unauthorized',
	403: 'Forbidden',
	404: 'Not found',
	409: 'Conflict',
};

const HttpError = (
	status: number,
	message: string = errorMessages[status]
): CustomError => {
	const error = new Error(message) as CustomError;
	error.status = status;
	return error;
};

export default HttpError;
