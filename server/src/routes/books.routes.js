const express = require('express')
const controller = require('../controllers/books.controllers')

const bookRoutes = express.Router()

bookRoutes.get('/', controller.allBooks)

bookRoutes.get('/:id', controller.bookById)

bookRoutes.post('/', controller.createBook)

bookRoutes.delete('/:id', controller.deleteBook)

bookRoutes.patch('/:id', controller.patchBook)

module.exports = bookRoutes