import express from "express";
const cors = require("cors");
import "module-alias/register";
import errorHandler from "@/middleware/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
import coinRoutes from "@/routes/coins";

app.use("/api/v1/coins", coinRoutes);

app.use(errorHandler);

export default app;
