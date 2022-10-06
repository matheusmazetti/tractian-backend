import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import { errorHandling } from './middlewares/errorHandlingMiddleware.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);

app.use(errorHandling);

app.listen(3000, () => {
    console.log('up and running');
});