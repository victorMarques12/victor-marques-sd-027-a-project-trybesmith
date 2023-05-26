import { OrderWithProduct } from 'src/types/OrderWithProduct';
import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';

const getOrdersWithProducts = async (): Promise<OrderWithProduct[]> => {
  const orders: OrderSequelizeModel[] = await OrderModel.findAll();
  const ordersProducts = orders.map(
    async (order: OrderSequelizeModel): Promise<OrderWithProduct> => {
      const products = await ProductModel.findAll({ where: { orderId: order.dataValues.id } });
      const productIds = products.map(
        (product: ProductSequelizeModel): number => product.dataValues.id,
      );
      return {
        id: order.dataValues.id,
        userId: order.dataValues.userId,
        productIds,
      };
    },
  );

  const toReturn = await Promise.all(ordersProducts);
  return toReturn;
};

export default {
  getOrdersWithProducts,
};