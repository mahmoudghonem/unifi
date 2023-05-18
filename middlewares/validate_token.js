import UserModel from "../models/user.model.js";

const validateToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const payload = await UserModel.verifyJwtToken(token);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'UNAUTHORIZED' });
    }
};

export default validateToken;