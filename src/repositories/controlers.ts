import { Request, Response, NextFunction } from 'express';
import uniqid from 'uniqid';

import HttpError from '../helpers/HttpError.js';
import notesData from '../data/notes.js';
import { calculateCategoryStats } from '../services/statFunctions.js';

const memoryStorage = [...notesData];

// Get all notes
const getAllNotes = async (req: Request, res: Response) => {
	res.status(200).json(memoryStorage);
};

// Get a specific note by ID
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

// Get statistics about notes categories
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

// Create a new note
const postNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const newNote = req.body;
		newNote.id = uniqid();
		memoryStorage.push(newNote);
		res.status(201).json(newNote);
	} catch (error) {
		next(error);
	}
};

// Delete a note by ID
const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const noteId: string = req.params.id;
		const index = memoryStorage.findIndex((item) => item.id === noteId);
		if (index === -1) {
			throw HttpError(404, `Note with id ${noteId} not found.`);
		}
		memoryStorage.splice(index, 1);

		res.status(200).json({ message: `Note with id ${noteId} deleted.` });
	} catch (error) {
		next(error);
	}
};

// Update a note by ID
const updateNote = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const noteId: string = req.params.id;
		const updatedNote = req.body;
		const index = memoryStorage.findIndex((item) => item.id === noteId);

		if (index === -1) {
			throw HttpError(404, `Note with id ${noteId} not found.`);
		}

		memoryStorage[index] = { ...memoryStorage[index], ...updatedNote };

		res.status(200).json({ note: memoryStorage[index] });
	} catch (error) {
		next(error);
	}
};

export {
	getAllNotes,
	getNote,
	getNotesStats,
	postNote,
	deleteNote,
	updateNote,
};
