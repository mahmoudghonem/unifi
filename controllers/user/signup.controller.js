import UserModel from "../../models/user.model.js";

async function signUpUser(req, res) {
    const { email, password } = req.body;

    try {
        // Check if user exists
        await checkIfUserAlreadyExist(email, res)

        // Create New User Document
        const user = new UserModel({ email, password });
        await user.save();

        // Generate JWT token
        const token = await user.generateJwtToken();
        return res.status(200).json({ message: 'Successful Operation', token: token });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

async function checkIfUserAlreadyExist(email, res) {
    const user = await UserModel.findOne({ email });
    if (user) {
        res.status(403).json({ message: 'User already registered' });
    }
}

export default signUpUser;