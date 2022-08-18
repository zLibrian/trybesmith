import { NextFunction, Request, Response } from 'express';
import productService from '../services/productService';
import { AddProduct } from '../types/product';

const productController = {
  create: async (req: Request, res: Response, _next: NextFunction) => {
    const { name, amount }: AddProduct = req.body;
    const insertedProduct = await productService.create({ name, amount });
    return res.status(201).json(insertedProduct);
  },
  list: async (req: Request, res: Response, _next: NextFunction) => {
    const products = await productService.list();
    return res.status(200).json(products);
  },
};

export default productController;