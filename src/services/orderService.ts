import orderModel from '../models/orderModel';
import { Order } from '../types/order';

const orderService = {
  list: async ():Promise<Order[]> => {
    const orders = await orderModel.list();
    return orders;
  },  
};
export default orderService;
