import productModel from '../models/productModel';
import { AddedProduct, AddProduct, Product } from '../types/product';

const productService = {
  create: async (product: AddProduct): Promise<AddedProduct> => {
    const insertedProduct = await productModel.create(product);
    return insertedProduct;
  },
};
export default productService;
