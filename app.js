const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const providersRouter = require('./routes/providers');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/providers', providersRouter);

mongoose.connect('mongodb://localhost:27017/provider_backend',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = app;
