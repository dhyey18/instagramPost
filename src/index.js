import connectDB from "./database/connection.js";
import app from "./app.js";

const PORT = 3000;
const db_url = `mongodb+srv://DhyeyPatel:DhyeyPatel%4018@atlascluster.etej1ka.mongodb.net/instagram`;

connectDB(db_url).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// import express from "express";

// const app = express();
// const PORT = 8000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//   res.send("About route 🎉 ");
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server is running on port ${PORT}`);
// });
