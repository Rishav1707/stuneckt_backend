import mongoose from "mongoose";

const MONGO_URL: string = process.env.MONGO_URL || " ";

const db = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database is connected");
  } catch (error) {
    console.log("Error while connecting to the database");
    console.log(error);
  }
};

export default db;
