import express from "express";
import updateTodo from "../controllers/todo/updateTodo.controller.js";
import createTodo from "../controllers/todo/createTodo.controller.js";
import getTodo from "../controllers/todo/getTodo.controller.js";
import deleteToken from "../controllers/todo/deleteTodo.controller.js";
import getAllTodo from "../controllers/todo/getAllTodo.controller.js";

const todoRouter = express.Router();

// Add a new todo for a login user
todoRouter.post('/', createTodo);

// Update an existing todo for a login user
todoRouter.put('/:todoId', updateTodo);

// get an existing todo for a login user
todoRouter.get('/:todoId', getTodo);

// get all user todos
todoRouter.get('/', getAllTodo);

// delete a todo for a login user
todoRouter.delete('/:todoId', deleteToken);

export default todoRouter;