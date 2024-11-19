import mongoose from "mongoose";

// Connect to MongoDB

function connectDB(db_url) {
  return mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default connectDB;
