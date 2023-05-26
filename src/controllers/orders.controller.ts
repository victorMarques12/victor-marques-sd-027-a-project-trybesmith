import { Request, Response } from 'express';
import ordersService from '../services/ornders.services';

const getOrdersProducts = async (req: Request, res: Response) => {
  const ordersWithProductsControler = await ordersService.getOrdersWithProducts();
  return res.status(200).json(ordersWithProductsControler);
};

export default {
  getOrdersProducts,
};