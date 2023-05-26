import { Request, Response } from 'express';
import productServe from '../services/product.serve';

async function create(req: Request, res: Response) {
  const newProduct = req.body;

  const response = await productServe.create(newProduct);

  res.status(201).json(response);
}
async function getAll(_req: Request, res: Response) {
  const Products = await productServe.getAllProducts();
  res.status(200).json(Products);
}

export default {
  create,
  getAll,
};