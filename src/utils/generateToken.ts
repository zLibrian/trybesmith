import JWT, { Secret, SignOptions } from 'jsonwebtoken';
import { Token } from '../types/user';

const generateToken = async (payload: unknown):Promise<Token> => {
  const OPTIONS:SignOptions = {
    algorithm: 'HS256',
    expiresIn: '10h', 
  };

  const SECRETE:Secret = 'SenhaSuperSeguraSegurosa@';
  const token:Token = { token: JWT.sign({ payload }, SECRETE, OPTIONS) };
  return token;
};

export default generateToken;