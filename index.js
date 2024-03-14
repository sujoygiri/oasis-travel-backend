require('dotenv').config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoute = require("./routes/auth.route");
const errorHandler = require('./utils/errorHandel.util');

const app = express();
const port = 3000;
const DbRemoteURL = `mongodb+srv://${process.env.DB_ADMIN_USER_NAME}:${process.env.DB_PASSWORD}@db-mongodb-blr1-100-ece3e6d1.mongo.ondigitalocean.com/`;
const DbLocalURL = "mongodb://localhost:27017";

mongoose.connect(DbLocalURL, { dbName: 'oasis_travel' }).then(() => {
    console.log("Db connection successful!");
}).catch(error => {
    console.log(error);
});

app.use(cors({origin:'http://localhost:4200',credentials:true,optionsSuccessStatus:200}));
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.json({ resp: "Hello from oasis world!" });
});
app.use('/api/auth', authRoute);
app.use(errorHandler);

app.listen(port, () => {
    console.log('App is running on port: ' + port);
});