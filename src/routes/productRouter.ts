import express from 'express';
import productController from '../controllers/productController';
import schemaValidator from '../middlewares/schemaValidator';
import productSchema from '../schemas/productSchema';

const productRouter = express.Router();

productRouter.get('/', productController.list);
productRouter.post('/', schemaValidator(productSchema), productController.create);

export default productRouter;