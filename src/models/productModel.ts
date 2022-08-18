import { ResultSetHeader } from 'mysql2';
import { AddedProduct, AddProduct, Product } from '../types/product';
import connection from './connection';

const productModel = {
  create: async (product: AddProduct):Promise<AddedProduct> => {
    const insertSql = `
      INSERT INTO Trybesmith.Products (name, amount)
      VALUES (?, ?);`;
    const [{ insertId }] = await connection.execute<ResultSetHeader>(
      insertSql,
      [product.name, product.amount],
    );
    const insertedProduct:AddedProduct = { id: insertId, ...product };
    return insertedProduct;
  },
  list: async ():Promise<Product[]> => {
    const listSql = 'SELECT * FROM Trybesmith.Products;';
    const [products] = await connection.execute(listSql);
    return products as Product[];
  },
};

export default productModel;
