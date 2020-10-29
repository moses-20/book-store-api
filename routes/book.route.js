const { Router } = require('express')
const router = Router()
const { addBook } = require('../controllers/book.controller')

router.post('/books', addBook)

module.exports = router
