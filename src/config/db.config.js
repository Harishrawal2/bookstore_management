import mongoose from "mongoose";

const MongoDB = async () => {
  const DB = await mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`MongoDB is Connected Successfully: ${DB.connection.host}`);
};

export default MongoDB;
