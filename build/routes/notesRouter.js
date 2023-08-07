import express from 'express';
import { getAllNotes } from '../repositories/controlers.js';
const router = express.Router();
router.get('/', getAllNotes);
export default router;
//# sourceMappingURL=notesRouter.js.map