import bcrypt from 'bcryptjs';
import { ServiceResponse } from '../types/service.response';
import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import { Login } from '../types/Login';

const login = async ({ username, password }: Login):
Promise<ServiceResponse<UserSequelizeModel>> => {
  const response: UserSequelizeModel | null = await UserModel.findOne({ where: { username } });
  let serviceResponse: ServiceResponse<UserSequelizeModel>;
  if (!response || !bcrypt.compareSync(password, response.dataValues.password)) {
    serviceResponse = { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
    return serviceResponse;
  }
  serviceResponse = { status: 'SUCCESSFUL', data: response };
  return serviceResponse;
};

export default {
  login,
};