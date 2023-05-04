const BookModel = require("../schemes/book.scheme")
const { v4 } = require('uuid');

const controller = {}

controller.allBooks =  async (req, res) => {
    try {
        const allBooks = await BookModel.find()
console.log(allBooks);
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
    const {name, author, pages, yearPublished, isbn, language,sinopsis,image} = req.body
    const newBook = new BookModel({
        _id: v4(),
        name,
        author,
        pages, 
        yearPublished, 
        isbn, 
        language, 
        sinopsis,
        image
    })

    await newBook.save()

    res.send('Book registered')
}

controller.deleteBook = async (req, res) => {
    const book = await BookModel.findByIdAndDelete(req.params.id)

    if(!book){
        return res.status(409).send('Book does not exist')
    }

    res.send('Book removed')
}

controller.patchBook = async (req, res) => {
    const book = await BookModel.findById(req.params.id)

    if(!book){
        return res.status(409).send('Book does not exist')
    }

    await BookModel.updateOne({_id: req.params.id}, {$set: {yearPublished: 1999}})

    res.send('Book updated')
}


module.exports = controller