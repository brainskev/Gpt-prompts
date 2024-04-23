import mongoose from "mongoose";
let isConnected = false;


export const connectToDB = async () => {
    mongoose.set('strictQuery', tue);

    if (isConnected) {
        console.log('MongoDB is connected');
        return;
    }
}
 try {
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology:True

    })
    isConnected = true;
    console.log('MongoDb connected')
 } catch (error) {
    console.log(error);
 }