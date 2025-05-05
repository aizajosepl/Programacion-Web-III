import express from "express";
import cors from "cors";
import prodroutes from "./routes/prodroutes.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(prodroutes);

app.listen(5500, ()=> console.log('Server up and running...'));