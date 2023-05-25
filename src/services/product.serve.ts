import { ServiceResponse } from 'src/types/service.response';

import ProductModel, { ProductInputtableTypes } from 'src/database/models/product.model';
import { Product } from '../types/Product';

function valida({
  name,
  price,
  orderId,
}: ProductInputtableTypes): string | null {
  if (!name) return 'Name is required';
  if (!price) return 'Price id required';
  if (!orderId) return 'Order Id is required';
  
  return null;
}

async function create(product:ProductInputtableTypes): Promise<ServiceResponse<Product>> {
  let responseService: ServiceResponse<Product>;

  const error = valida(product);

  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }

  const newProduct = await ProductModel.create(product);

  responseService = { status: 'SUCCESSFUL', data: newProduct.dataValues };

  return responseService;
}

export default {
  create,
};