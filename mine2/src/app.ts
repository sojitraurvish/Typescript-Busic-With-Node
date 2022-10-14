import express from "express";
import bodyParser from "body-parser";

import todosRoutes from "./routes/todos";

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(5000, () => {
    console.log("Server is created at Port 5000");
});