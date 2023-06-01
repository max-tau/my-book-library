const express = require('express');
const bookController = require('../controller/book');

const bookRouter = express.Router();

bookRouter
  .post('/', bookController.create)
  .get('/', bookController.findAll)
  .get('/:id', bookController.findById)
  .patch('/:id', bookController.updateGenre)
  .delete('/:id', bookController.delete);

module.exports = bookRouter;
