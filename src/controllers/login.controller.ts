import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import loginService from '../services/longin.services';
import jwt from '../utils/jwt.util';

const login = async (req: Request, res: Response) => {
  const Body = req.body;
  const serviceResponse = await loginService.login(Body);
  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  const token = jwt.newToken(Body.username);
  return res.status(200).json({ token });
};

export default {
  login,
};