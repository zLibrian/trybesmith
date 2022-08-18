import { NextFunction, Request, Response } from 'express';
import userService from '../services/userService';
import { User } from '../types/user';

const userController = {
  create: async (req: Request, res: Response, _next: NextFunction) => {
    const { username, classe, level, password } = req.body;
    const newUser: User = { username, classe, level, password };
    const newUserToken = await userService.create(newUser);
    return res.status(201).json(newUserToken);
  },
};

export default userController;