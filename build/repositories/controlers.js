import notesData from '../data/notes.js';
const getAllNotes = async (req, res) => {
    res.status(200).json(notesData);
};
export { getAllNotes };
//# sourceMappingURL=controlers.js.map