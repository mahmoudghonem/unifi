import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://test:mahmoud123456789@cluster0.npjhw23.mongodb.net/?retryWrites=true&w=majority", {
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;