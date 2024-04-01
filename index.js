require('dotenv').config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("node:path");

const authRouter = require("./routes/auth.route");
const destinationRouter = require('./routes/destination.route');
const dealRouter = require('./routes/deal.route');
const errorHandler = require('./utils/errorHandel.util');

const app = express();
const port = 3000;
let DbURL = '';
if (process.env.CINNAMON) {
    DbURL = `mongodb+srv://${process.env.DB_ADMIN_USER_NAME}:${process.env.DB_PASSWORD}@db-mongodb-blr1-100-ece3e6d1.mongo.ondigitalocean.com/`;
} else {
    DbURL = "mongodb://localhost:27017";
}

mongoose.connect(DbURL, { dbName: 'oasis_travel' }).then(() => {
    console.log("Db connection successful!");
}).catch(error => {
    console.log(error);
});

app.use(cors({ origin: 'http://localhost:2015', credentials: true, optionsSuccessStatus: 200 }));
// app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public', 'oasis-travel', 'browser')));
app.get("/", (req, res) => {
    res.json({message:"Welcome to Oasis Travel!"});
});
app.use('/api/auth', authRouter);
app.use('/api/destination', destinationRouter);
app.use('/api/deal', dealRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log('App is running on port: ' + port);
});