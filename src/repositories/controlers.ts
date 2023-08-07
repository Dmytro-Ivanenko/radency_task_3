import { Request, Response, NextFunction } from 'express';
import HttpError from '../helpers/HttpError.js';
import notesData from '../data/notes.js';
import { calculateCategoryStats } from '../services/statFunctions.js';

const memoryStorage = [...notesData];

// get
const getAllNotes = async (req: Request, res: Response) => {
	res.status(200).json(memoryStorage);
};

const getNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const noteId: string = req.params.id;
		const note = memoryStorage.find((item) => item.id === noteId);

		if (!note) {
			throw HttpError(404, `Note with id ${noteId} not found.`);
		}

		res.status(200).json(note);
	} catch (error) {
		next(error);
	}
};

const getNotesStats = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const stats = calculateCategoryStats(memoryStorage);
		res.status(200).json(stats);
	} catch (error) {
		next(error);
	}
};

export { getAllNotes, getNote, getNotesStats };
