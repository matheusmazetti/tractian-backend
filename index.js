import express from 'express';
import 'express-async-errors';

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('up and running');
});