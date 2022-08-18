import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import productRouter from './routes/productRouter';

const app = express();
app.use(express.json());

app.use('/products', productRouter);
app.use(errorHandler);

export default app;
