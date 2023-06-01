module.exports = (connection, DataTypes) => {
  const schema = {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    ISBN: DataTypes.STRING,
  };

  const BookModel = connection.define('Books', schema);
  return BookModel;
};
