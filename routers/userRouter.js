import { Router } from 'express';
import { createNewUser } from '../controllers/userController.js';

let userRouter = Router();

userRouter.post('/user/new', createNewUser)