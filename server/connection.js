import mongoose from "mongoose";

async function connecteToMongoDB(url) {
  try {
    await mongoose.connect(url);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
}

export {
    connecteToMongoDB,
}