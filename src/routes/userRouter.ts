import express from 'express';
import userController from '../controllers/userController';
import schemaValidator from '../middlewares/schemaValidator';
import userSchema from '../schemas/userSchema';

const userRouter = express.Router();

userRouter.post('/', schemaValidator(userSchema), userController.create);

export default userRouter;