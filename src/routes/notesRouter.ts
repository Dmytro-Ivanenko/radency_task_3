import express from 'express';
import {
	getAllNotes,
	getNote,
	postNote,
	getNotesStats,
	updateNote,
	deleteNote,
} from '../repositories/controlers.js';
import validateBody from '../services/validateBody.js';
import { noteValidateSchema } from '../models/schemas.js';
const router = express.Router();

// routes

router.get('/', getAllNotes);
router.post('/', validateBody(noteValidateSchema), postNote);
router.get('/stats', getNotesStats);
router.get('/:id', getNote);
router.patch('/:id', validateBody(noteValidateSchema), updateNote);
router.delete('/:id', deleteNote);

export default router;
