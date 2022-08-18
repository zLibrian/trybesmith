import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

const schemaValidator = (schema: ObjectSchema) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    await schema.validateAsync(req.body);
    return next();
  };

export default schemaValidator;
