import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const configJwt: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const LoginVerifica = (token: string): JwtPayload | string => jwt.verify(token, secret);

const newToken = (payload: JwtPayload): string => jwt.sign({ payload }, secret, configJwt);

export default {
  LoginVerifica,
  newToken,
};