import express, { Router } from 'express';
const route = express.Router();

import { body } from 'express-validator';

import fetchuser from '../middleware/fetchuser.js';
import { signin, signup, getuser } from '../controllers/user-controller.js';
const JWT_SECRET = 'DhananjayIsTheController';

route.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], signin);

route.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], signup);


route.post('/getuser', fetchuser, getuser);

export default route;