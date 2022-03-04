const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');
const userRouter = require('../backend/routers/userRouter');


//middleware
app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('./add', userRouter);

app.listen( () => {
    console.log("server started");
} )

