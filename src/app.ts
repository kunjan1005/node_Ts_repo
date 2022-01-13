import dotenv from "dotenv";
import express,{Request,Response} from "express";
import cors from "cors";
import helmet from "helmet";
import "./config/db";
import userRouter from "./router/user";
dotenv.config();
if (process.env.PORT=='') {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT) |8000
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/user',userRouter)
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});