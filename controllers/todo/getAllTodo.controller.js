import TodoModel from "../../models/todo.model.js";

async function getAllTodo(req, res) {
    const { todoId } = req.params;
    const { userId } = req.user;

    try {
        const todos = await TodoModel.find(
            { user: userId },
        );
        return res.status(200).json({ message: 'Successful Operation', todos: todos });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export default getAllTodo;