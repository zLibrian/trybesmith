import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import errorMap from '../utils/customErrorMessages';

const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (Joi.isError(err)) {
    const [code, message] = err.message.split('|');
    return res.status(parseInt(code, 10)).json({ message });
  }
  
  const customError = errorMap[err.message];
  if (customError) return res.status(customError.code).json({ message: customError.message });

  return res.status(500).json({ message: 'Internal server error' });
};
export default errorHandler;
