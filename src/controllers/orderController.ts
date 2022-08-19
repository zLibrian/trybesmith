import { NextFunction, Request, Response } from 'express';
import orderSchema from '../schemas/orderSchema';
import orderService from '../services/orderService';
import productService from '../services/productService';
import { Order } from '../types/order';

const orderController = {
  list: async (req: Request, res: Response, _next: NextFunction) => {
    const orders:Order[] = await orderService.list();
    return res.status(200).json(orders);
  },
  create: async (req: Request, res: Response, _next: NextFunction) => {
    const { decodedToken: { payload }, productsIds } = req.body;
    const toBeValidate = { userId: payload.id, productsIds };
    const data = await orderSchema.validateAsync(toBeValidate);
    const orderId = await orderService.create(data.userId);
    await productService.update(productsIds, orderId);
    return res.status(201).json(data);
  },
};

export default orderController;