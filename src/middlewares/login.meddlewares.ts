import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const login = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).validate(req.body);

  if (error) {
    return res.status(mapStatusHTTP('INVALID_DATA'))
      .json({ message: '"username" and "password" are required' });
  }
  return next();
};
export default login;