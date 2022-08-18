export type Product = {
  id: number,
  name: string,
  amount: string,
  orderId: number | null
};

export type AddProduct = Omit<Product, 'orderId' | 'id'>;

export type AddedProduct = Omit<Product, 'orderId'>;
