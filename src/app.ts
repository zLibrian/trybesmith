import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import loginRouter from './routes/loginRouter';
import orderRouter from './routes/orderRouter';
import productRouter from './routes/productRouter';
import userRouter from './routes/userRouter';

const app = express();
app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);
app.use(errorHandler);

export default app;
