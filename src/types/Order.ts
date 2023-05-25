export type Order = {
  id: number;
  userId: string;
  productId?: string;
};
/* export type OrderIncludeProductIds = Order & {
  productIds: { id: number }[];
};

export type OrderProductIds = Order & {
  productIds: number[];
}; */
