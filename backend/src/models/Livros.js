const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const LivroSchema = new mongoose.Schema({
  author: String,
  nomeLivro: String,
  numeroPaginas: String,
  editora: String,
  isbn: String,
  image: String,
}, {
  timestamps: true
})

LivroSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Livros', LivroSchema)
