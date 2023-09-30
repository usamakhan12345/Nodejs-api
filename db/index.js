import mongoose from "mongoose";


async function connectDb() {
    try {
        await mongoose.connect('mongodb+srv://usamakhan:usama123@cluster0.zau8mk3.mongodb.net/Users?retryWrites=true&w=majority', {
            useNewUrlParser: true
        });
        console.log("Database connected successfully!")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


export default connectDb