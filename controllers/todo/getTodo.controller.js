import TodoModel from "../../models/todo.model.js";

async function getTodo(req, res) {
    const { todoId } = req.params;
    const { userId } = req.user;

    try {
        const todo = await TodoModel.findOne(
            { _id: todoId, user: userId },
        );
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
       return res.status(200).json({ message: 'Successful Operation', todo: todo });
    } catch (err) {
       return res.status(500).json({ message: err.message });
    }
}

export default getTodo;