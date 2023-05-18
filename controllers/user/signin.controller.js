import UserModel from "../../models/user.model.js";

async function signInUser(req, res) {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await checkIfUserAlreadyExist(email, res)

        // Check if password is correct
        const isMatch = await user.comparePassword(password);

        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate JWT token
        const token = await user.generateJwtToken();

        return res.status(200).json({ message: 'Successful Operation', token: token });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

async function checkIfUserAlreadyExist(email, res) {
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return user;
}

export default signInUser;