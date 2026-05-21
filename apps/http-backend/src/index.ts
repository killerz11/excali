import express, { Response, Request } from 'express';
import authRouter from "./routes/auth.routes";

const app = express();

app.use(express.json());

app.use("api/v1/auth", authRouter)

app.listen(5000);


