import express from 'express';
import signInUser from '../controllers/user/signin.controller.js';
import signUpUser from '../controllers/user/signup.controller.js';


const userRouter = express.Router();

userRouter.post('/signin', signInUser);

userRouter.post('/signup', signUpUser);

export default userRouter;

