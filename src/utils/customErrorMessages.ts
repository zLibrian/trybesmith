import { ErrorMap } from '../types/error';

const errorMap:ErrorMap = {
  INVALID_CREDENTIALS: { message: 'Username or password invalid', code: 401 },
  TOKEN_NOT_FOUND: { message: 'Token not found', code: 401 },
};

export default errorMap;