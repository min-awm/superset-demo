import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/routers.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/', express.static('public'))
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});