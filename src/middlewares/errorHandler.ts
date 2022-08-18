import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

type ErrorMap = {
  [key: string]: { message: string, code: number }
};

const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (Joi.isError(err)) return res.status(400).json({ message: err.message });

  const errorMap:ErrorMap = {
    INVALID_CREDENTIALS: { message: 'Username or password invalid', code: 401 },
  };

  const customError = errorMap[err.message];
  if (customError) return res.status(customError.code).json({ message: customError.message });

  return res.status(500).json({ message: 'Internal server error' });
};
export default errorHandler;
