import { Router } from 'express';
const userRouter = Router();

import usersController from '../controllers/users.controller';

// User-route
userRouter.get('/', usersController.getAll);
userRouter.get('/:id', usersController.getById);
userRouter.post('/', usersController.add);
userRouter.put('/:id', usersController.updateById);
userRouter.delete('/:id', usersController.deleteById);

export default userRouter;
