import { NextFunction, Request, Response } from 'express';
import loginService from '../services/loginService';
import { Login } from '../types/login';

const loginController = {
  getByEmailAndPassword: async (req: Request, res: Response, _next: NextFunction) => {
    const credentials:Login = req.body;
    const token = await loginService.getByEmailAndPassword(credentials);
    return res.status(200).json(token);
  },
};

export default loginController;
