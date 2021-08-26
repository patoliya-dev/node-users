import { Router } from 'express';
import userRouter  from './Users';

// Export the base-router
const baseRouter = Router();
baseRouter.use('/user', userRouter);

export default baseRouter;
