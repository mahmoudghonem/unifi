import express from 'express';
import userRouter from './user.route.js';
import todoRouter from './todo.route.js';

const router = express.Router()

router.use('/todo', todoRouter);

router.use('/user', userRouter);

export default router;