const Book = require('../models/book.model')

const bookCtrl = {}

// create = post
bookCtrl.addBook = async (req, res) => {
 const { author, title, publisher, summary, pages, ISBN } = req.body

 try {

  let book = await Book.create({ author, title, publisher, summary, pages, ISBN })

  res.status(201).json({ book })

 } catch (err) {
  res.status(400).send(err)
 }
}

// read = get

// update = put

// delete = delete

module.exports = bookCtrl