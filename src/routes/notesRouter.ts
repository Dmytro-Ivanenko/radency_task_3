import express from 'express';
import { getAllNotes } from '../repositories/controlers.js';
// import validateBody from '../services/validateBody.js';
// import { noteValidateSchema } from '../models/schemas.js';
const router = express.Router();

// routes
// router.get('/:id', getNote);
router.get('/', getAllNotes);
// router.get('/stats', getNotesStats);
// router.post('/', validateBody(noteValidateSchema), postNote);
// router.delete('/:id', deleteNote);
// router.patch('/:id', validateBody(noteValidateSchema), updateNote);

export default router;
