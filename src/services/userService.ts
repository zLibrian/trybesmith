import userModel from '../models/userModel';
import { Token, User } from '../types/user';
import generateToken from '../utils/generateToken';

const userService = {
  create: async (product: User): Promise<Token> => {
    const insertedUser = await userModel.create(product);
    if (!insertedUser.id) throw new Error('Algo deu errado');
    const token:Token = await generateToken(insertedUser);
    return token;
  },
};
export default userService;
