const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

dotenv.config({path: './config.env'})
require('./db/conn')

//Models
const Pizza = require('./model/pizza/pizzaModel')

//Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'))

// Routes
app.use(require('./routes/pizza/pizzaRoutes'));

//Port
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running at Port No ${PORT}`);
})