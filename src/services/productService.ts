import productModel from '../models/productModel';
import { AddedProduct, AddProduct, Product } from '../types/product';

const productService = {
  create: async (product: AddProduct): Promise<AddedProduct> => {
    const insertedProduct = await productModel.create(product);
    return insertedProduct;
  },
  list: async ():Promise<Product[]> => {
    const products = await productModel.list();
    return products;
  },  
};
export default productService;
