import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  const { message, name } = err;
  return res.status(500).json({ message, name });
};
export default errorHandler;