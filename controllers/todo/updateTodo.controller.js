import TodoModel from "../../models/todo.model.js";

async function updateTodo(req, res) {
    const { title, description, completed } = req.body;
    const { todoId } = req.params;
    const { userId } = req.user;

    try {
        const updatedTodo = await TodoModel.findOneAndUpdate(
            { _id: todoId, user: userId },
            { title, description, completed },
            { new: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        return res.status(200).json({ message: 'Successful Operation', todo: updatedTodo });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export default updateTodo;