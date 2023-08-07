import express from 'express';
import {
	getAllNotes,
	getNote,
	getNotesStats,
} from '../repositories/controlers.js';
// import validateBody from '../services/validateBody.js';
// import { noteValidateSchema } from '../models/schemas.js';
const router = express.Router();

// routes

router.get('/', getAllNotes);
router.get('/stats', getNotesStats);
router.get('/:id', getNote);
// router.post('/', validateBody(noteValidateSchema), postNote);
// router.delete('/:id', deleteNote);
// router.patch('/:id', validateBody(noteValidateSchema), updateNote);

export default router;
