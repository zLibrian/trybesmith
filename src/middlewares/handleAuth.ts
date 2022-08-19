import { NextFunction, Request, Response } from 'express';
import decodeToken from '../utils/decodeToken';

const handleAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) throw new Error('TOKEN_NOT_FOUND');
  const decodedToken = await decodeToken(token);
  
  req.body = { ...req.body, decodedToken };
  next();
};

export default handleAuth;