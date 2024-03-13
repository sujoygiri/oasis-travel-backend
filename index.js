require('dotenv').config()
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth.route")

const app = express();
const port = 3000;
const DbURL = `mongodb+srv://${process.env.DB_ADMIN_USER_NAME}:${process.env.DB_PASSWORD}@db-mongodb-blr1-100-ece3e6d1.mongo.ondigitalocean.com/`;
mongoose.connect(DbURL,{dbName:'oasis_travel'}).catch(error => {
    console.log(error)
})
app.use(helmet())
app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.get("/", (req, res) => {
    res.json({resp: "Hello from oasis world!"});
})
app.use('/api/auth', authRoute);

app.listen(port, () => {
    console.log('App is running on port: ' + port);
})