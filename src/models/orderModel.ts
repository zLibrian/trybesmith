import { ResultSetHeader } from 'mysql2';
import { Order } from '../types/order';
import connection from './connection';

const orderModel = {
  list: async ():Promise<Order[]> => {
    const listSql = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Orders as o
      INNER JOIN Trybesmith.Products as p
      ON o.id = p.orderId
      GROUP BY o.id ORDER BY o.userId;`;
    const [orders] = await connection.execute(listSql);
    return orders as Order[];
  },
  create: async (userId: number):Promise<number> => {
    const insertOrder = 'INSERT INTO Trybesmith.Orders(userId) VALUES (?)';
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(insertOrder, [userId]);
    return insertId;
  },
};

export default orderModel;
