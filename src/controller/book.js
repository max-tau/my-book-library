const { Book } = require('../models');

exports.create = async (req, res) => {
  const newBook = await Book.create(req.body);

  res.status(201).json(newBook);
};

exports.findAll = async (_, res) => {
  const books = await Book.findAll();

  res.status(200).json(books);
};

exports.findById = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (!book) {
    res.status(404).json({ error: 'The book could not be found.' });
  }
  res.status(200).json(book);
};

exports.updateGenre = async (req, res) => {
  const { id } = req.params;
  const [book] = await Book.update(req.body, { where: { id } });

  if (!book) {
    res.status(404).json({ error: 'The book could not be found.' });
  }
  res.status(200).json(book);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedBook = await Book.destroy({ where: { id } });

  if (!deletedBook) {
    res.status(404).json({ error: 'The book could not be found.' });
  }
  res.status(204).json(deletedBook);
};
