import connectDB from "./src/database/connection.js";
import app from "./src/app.js";

const PORT = 3000;
const db_url = `mongodb+srv://DhyeyPatel:DhyeyPatel%4018@atlascluster.etej1ka.mongodb.net/instagram`;

connectDB(db_url).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
