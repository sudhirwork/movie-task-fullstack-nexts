import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (!process.env.MONGODB_URI) return console.error(`Missing MONGODB_URI`);

    await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error(`Something wrong with the connection: ${error}`);
  }
};

export const disconnectDb = async () => {
  try {
    await mongoose.disconnect();
  } catch (error) {
    console.error(`Something wrong with the disconnection: ${error}`);
  }
};
