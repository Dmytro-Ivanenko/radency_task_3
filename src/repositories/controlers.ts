import { Request, Response } from 'express';
import notesData from '../data/notes.js';
// get
const getAllNotes = async (req: Request, res: Response) => {
	res.status(200).json(notesData);
};

export { getAllNotes };
