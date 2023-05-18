import express from "express";
import validateToken from "../middlewares/validate_token.js";
import updateTodo from "../controllers/todo/updateTodo.controller.js";
import createTodo from "../controllers/todo/createTodo.controller.js";
import getTodo from "../controllers/todo/getTodo.controller.js";
import deleteToken from "../controllers/todo/deleteTodo.controller.js";

const todoRouter = express.Router();

// Add a new todo for a login user
todoRouter.post('/', validateToken, createTodo);

// Update an existing todo for a login user
todoRouter.put('/:todoId', validateToken, updateTodo);

// get an existing todo for a login user
todoRouter.get('/:todoId', validateToken, getTodo);

// delete a todo for a login user
todoRouter.delete('/:todoId', validateToken, deleteToken);

export default todoRouter;