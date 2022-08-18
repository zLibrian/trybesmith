import userModel from '../models/userModel';
import { Login } from '../types/login';
import { Token } from '../types/user';
import generateToken from '../utils/generateToken';

const loginService = {
  getByEmailAndPassword: async (credentials: Login):Promise<Token> => {
    const user = await userModel.getByUsername(credentials);
    if (!user) throw new Error('INVALID_CREDENTIALS');
    const token = await generateToken({ id: user.id, username: user.username });
    return token;
  },  
};
export default loginService;
