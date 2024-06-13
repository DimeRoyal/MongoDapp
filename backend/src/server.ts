import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const DB_URI: string = process.env.DB_URI as string;
const DB_SECRET: string = process.env.DB_SECRET as string;
const DB: string = DB_URI.replace("<password>", DB_SECRET);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
