import express from 'express';
import cors from 'cors';
import Connection from './database/Connection.js';

import Auth from './routes/auth.js';
import Notes from './routes/notes.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', Auth);
app.use('/api/notes', Notes);

Connection();

app.listen(port, () => {
  console.log(`mynotes-backend listening at http://localhost:${port}`)
})