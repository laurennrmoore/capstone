const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const path = require('path');
// const router = express.Router();
// const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());
app.use(express.static('client/build'))

const attractionsRouter = require('./Routes/Attractions.Routes');


app.use("/attractions", attractionsRouter);

const uri = process.env.ATLAS_URI;
        
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});




// //Contact Form Code
// const transporter = nodemailer.createTransport({
//   host: "smtp.example.com", //replace with your email provider
//   port: 587,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });


// app.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var subject = req.body.subject
//   var message = req.body.message

//   var mail = {
//     from: name,
//     to: // receiver email,
//     subject, subject,
//     text: message
//   }
// })
