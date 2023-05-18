import express from 'express';
import userRouter from './user.route.js';
import todoRouter from './todo.route.js';
import validateToken from '../middlewares/validate_token.js';

const router = express.Router()

router.use('/todo',validateToken, todoRouter);

router.use('/user', userRouter);

export default router;