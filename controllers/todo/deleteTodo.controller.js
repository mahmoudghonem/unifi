
import TodoModel from "../../models/todo.model.js";

async function deleteToken(req, res) {
    const { todoId } = req.params;
    const { userId } = req.user;

    try {
        const todo = await TodoModel.deleteOne(
            { _id: todoId, user: userId },
        );
        return res.status(200).json({ message: 'Successful Operation' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export default deleteToken;