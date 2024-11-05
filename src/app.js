import express from "express"
import dotenv from "dotenv"
import { route } from "./routes/index.js"
import cors from "cors";
dotenv.config({path: ".env"})

const app = express();
app.use(cors({
    origin: `http://localhost:${process.env.APP_PORT}`
}));

app.use(express.json());
app.use(route);

app.use((err, req, res, next) => {
    res.status(1000).json({
        message: `Internal Server Error - ${err.message}`
    });
    next();
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running in port:${PORT}`);
});