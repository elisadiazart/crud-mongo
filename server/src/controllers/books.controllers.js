const BookModel = require("../schemes/book.scheme")
const { v4 } = require('uuid');

const controller = {}

controller.allBooks =  async (req, res) => {
    try {
        const allBooks = await BookModel.find()

        res.status(200).send(allBooks)
    } catch (err) {
        res.status(500).send ({error: 'Error al leer la base de datos'})
    }
}

controller.bookById = async (req, res) => {
    try {
        const bookById = await BookModel.findById(req.params.id
        )

        res.status(200).send(bookById)
    } catch (err) {
        res.status(500).send ({error: 'Error al leer la base de datos'})
    }
}

controller.createBook = async (req, res) => {
    const {name, author, pages, yearPublished, isbn, language,sinopsis} = req.body
    const newBook = new BookModel({
        _id: v4(),
        name,
        author,
        pages, 
        yearPublished, 
        isbn, 
        language, 
        sinopsis
    })

    await newBook.save()

    res.send('Book registered')
}

controller.deleteBook = (req, res) => {

}

controller.patchBook = async (req, res) => {
    const book = await BookModel.findById(req.params.id)

    if(!book){
        return res.status(409).send('User does not exist')
    }

    await BookModel.updateOne({_id: req.params.id}, {$set: {yearPublished: 1999}})

    res.send('User updated')
}


module.exports = controller