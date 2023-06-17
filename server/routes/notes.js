import express, { Router } from 'express';
const route = express.Router();
import { body } from 'express-validator';
import { getNotes, addNote, updateNote, deleteNote, doneNote } from '../controllers/notes-controller.js';
import fetchuser from '../middleware/fetchuser.js';

route.get('/fetchallnotes', fetchuser, getNotes);

route.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 })
], addNote);

route.put('/updatenote/:id', fetchuser, updateNote);
route.delete('/deletenote/:id', fetchuser, deleteNote);
route.put('/donenote/:id', fetchuser, doneNote);

export default route;