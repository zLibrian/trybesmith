import JWT, { JwtPayload, Secret } from 'jsonwebtoken';

const decodeToken = async (token: string):Promise<JwtPayload | string> => {
  const SECRETE:Secret = 'SenhaSuperSeguraSegurosa@';
  const decodedToken: JwtPayload | string = JWT.verify(token, SECRETE);
  return decodedToken;
};

export default decodeToken;