require('dotenv').config()
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth.route")

const app = express();
const port = 3000;

app.use(helmet())
app.use(morgan('combined'))
app.get("/",(req,res)=>{
    res.json("Hello World");
})
app.use('/api/auth',authRoute);
app.listen(port,()=>{
    console.log('App is running on port: ' + port);
})
