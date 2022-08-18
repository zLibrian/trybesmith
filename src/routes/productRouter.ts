import express from 'express';
import productController from '../controllers/productController';

const productRouter = express.Router();

productRouter.get('/', productController.list);
productRouter.post('/', productController.create);

export default productRouter;