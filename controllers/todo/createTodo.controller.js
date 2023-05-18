import TodoModel from "../../models/todo.model.js";

async function createTodo(req, res) {
    const { title, description } = req.body;
    const { userId } = req.user;

    try {
        const newTodo = new TodoModel({
            title,
            description,
            user: userId,
        });
        await newTodo.save();
        return res.status(201).json({ message: "Successful Operation", todo: newTodo });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export default createTodo;