const express = require('express');
const readerController = require('../controller/reader');

const readerRouter = express.Router();

readerRouter
  .post('/', readerController.create)
  .get('/', readerController.findAll)
  .get('/:id', readerController.findByPk)
  .patch('/:id', readerController.updateEmail)
  .delete('/:id', readerController.delete);

module.exports = readerRouter;
