import express from 'express';
import loginController from '../controllers/loginController';
import schemaValidator from '../middlewares/schemaValidator';
import loginSchema from '../schemas/loginSchema';

const loginRouter = express.Router();

loginRouter.post('/', schemaValidator(loginSchema), loginController.getByEmailAndPassword);

export default loginRouter;
