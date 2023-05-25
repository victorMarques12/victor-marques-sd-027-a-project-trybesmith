import { Request, Response } from 'express';
import productServe from '../services/product.serve';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response) {
  const { id, name, price, orderId } = req.body;

  const response = await productServe.create({ id, name, price, orderId });

  if (response.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(response.status)).json(response.data);
  }

  res.status(201).json(response.data);
}

export default {
  create,
};