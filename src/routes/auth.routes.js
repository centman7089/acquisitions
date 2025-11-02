import { signup } from '#src/controllers/auth.controller.js';
import express from 'express';


const router = express.Router();

router.post('/sign-up', signup);

router.post('/sign-in', (req, res) => {
  // Handle user login
  res.status(200).send('Login successful');
} );

router.post('/sign-out', (req, res) => {
  // Handle user logout
  res.status(200).send('Logout successful');
} );


export default router;
