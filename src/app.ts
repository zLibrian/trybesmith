import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';

const app = express();
app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use(errorHandler);

export default app;
