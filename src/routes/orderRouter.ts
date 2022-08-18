import express from 'express';
import orderController from '../controllers/orderController';

const orderRouter = express.Router();

orderRouter.get('/', orderController.list);

export default orderRouter;