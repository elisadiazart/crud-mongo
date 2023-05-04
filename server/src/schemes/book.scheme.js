const mongoose = require ('mongoose')

const BookScheme = mongoose.Schema({
    _id: String,
    name: String,
    author: String,
    pages: Number,
    yearPublished: Number,
    isbn: Number,
    language: String,
    sinopsis: String,
    image: String
})

const BookModel = mongoose.model('books', BookScheme)

module.exports = BookModel