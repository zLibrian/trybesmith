import express from 'express';
import orderController from '../controllers/orderController';
import handleAuth from '../middlewares/handleAuth';

const orderRouter = express.Router();

orderRouter.get('/', orderController.list);
orderRouter.post('/', handleAuth, orderController.create);

export default orderRouter;