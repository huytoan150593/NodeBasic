import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./route/web";
import connection from "./configs/connectDB";

const app = express()
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app)
initWebRouter(app)



app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})