import orderModel from '../models/orderModel';
import { Order } from '../types/order';

const orderService = {
  list: async ():Promise<Order[]> => {
    const orders = await orderModel.list();
    return orders;
  },
  create: async (userId :number) => {
    const orderId = await orderModel.create(userId);
    return orderId;
  },
};
export default orderService;
