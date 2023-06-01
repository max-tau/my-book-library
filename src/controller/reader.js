const { Reader } = require('../models');

exports.create = async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(201).json(newReader);
};

exports.findAll = async (_, res) => {
  const readers = await Reader.findAll();
  res.status(200).json(readers);
};

exports.findByPk = async (req, res) => {
  const { id } = req.params;
  const reader = await Reader.findByPk(id);

  if (!reader) {
    res.status(404).json({ error: 'The reader could not be found.' });
  }
  res.status(200).json(reader);
};

exports.updateEmail = async (req, res) => {
  const { id } = req.params;
  const [reader] = await Reader.update(req.body, {
    where: { id },
  });

  if (!reader) {
    res.status(404).json({ error: 'The reader could not be found.' });
  }

  res.status(200).json(reader);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const deletedReader = await Reader.destroy({ where: { id } });

  if (!deletedReader) {
    res.status(404).json({ error: 'The reader could not be found.' });
  }

  res.status(204).json(deletedReader);
};
