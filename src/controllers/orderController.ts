import { NextFunction, Request, Response } from 'express';
import orderService from '../services/orderService';
import { Order } from '../types/order';

const orderController = {
  list: async (req: Request, res: Response, _next: NextFunction) => {
    const orders:Order[] = await orderService.list();
    return res.status(200).json(orders);
  },
};

export default orderController;