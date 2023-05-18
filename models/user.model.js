import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Define the user schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});


// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

// Add a method to the user schema to compare passwords
userSchema.methods.comparePassword =async function (password) {
    const user = this;
    return await bcrypt.compare(password, user.password);
};

// Add a method to the user schema to generate jwt
userSchema.methods.generateJwtToken = async function () {
    const user = this;
    const token = await jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET || 'ANY_SECRET',
        { expiresIn: '48h' }
    );
    return token;
};

userSchema.statics.verifyJwtToken = function (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET || 'ANY_SECRET');
    return decodedToken;
}

const UserModel = mongoose.model('User', userSchema);

// Export the user model
export default UserModel;