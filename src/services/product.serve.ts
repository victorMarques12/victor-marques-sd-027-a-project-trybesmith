import ProductModel,
{ ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product'; 

async function create({ name, price, orderId }: Product):Promise<ProductSequelizeModel> {
  const tProduct = await ProductModel.create({ name, price, orderId });
  return tProduct;
}

async function getAllProducts():Promise<ProductSequelizeModel[]> {
  const products = await ProductModel.findAll();
  return products;
}

export default {
  create,
  getAllProducts,
};