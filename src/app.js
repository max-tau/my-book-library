const express = require('express');
const readerRouter = require('./route/reader');
const bookRouter = require('./route/book');

const app = express();

app.use(express.json());
app.use('/readers', readerRouter);
app.use('/books', bookRouter);

module.exports = app;
