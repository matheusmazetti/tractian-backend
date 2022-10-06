import { Router } from 'express';
import { createNewUser } from '../controllers/userController.js';
import { checkNewUserObject } from '../middlewares/userMiddlewares.js';

let userRouter = Router();

userRouter.post('/user/new', checkNewUserObject, createNewUser);

export default userRouter;