const Livro = require('../models/Livros')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')


module.exports = {
  // Lista os Livros do mais atual para o mais antigo
  async index(req, res) {
    const { page = 1 } = req.query;
    //const livro = await Livro.find();
    const livro = await Livro.paginate({}, { page , limit: 10});
    
    return res.json(livro)
  },

  // gravar os livros
  async store(req, res) {
    
    const { filename: image} = req.file

    const data =  new Date();
    const dados = data.toString().split(' ');

    const [name, ext] = image.split('.')
    const complemento = (''+dados[1]+'-'+dados[2]+'-'+dados[3]+'-'+dados[4]).replace(":", "-").replace(":", "-");
    const fileName = `${name}`

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70})
      .toFile(
        path.resolve(req.file.destination, 
          'resizes', fileName+'.jpg')
      )
      
    var novoNome = path.resolve(req.file.destination,'resizes', fileName)+complemento+'.jpg'
    fs.renameSync(path.resolve(req.file.destination,'resizes', fileName+'.jpg'),novoNome)

    fs.unlinkSync(req.file.path)

    var livro = new Livro();
    livro.author = req.body.author;
    livro.nomeLivro = req.body.nomeLivro;
    livro.numeroPaginas = req.body.numeroPaginas;
    livro.editora = req.body.editora;
    livro.isbn = req.body.isbn;
    livro.image = fileName+complemento+'.jpg';

    try{
      req.io.emit('livro', livro);
      const obj_livro = await Livro.create(livro);
      
      return res.json(livro);
    }catch(e){
      console.log(e);
      
      return res.json(e);
    }
  },
  
  // Exclui o livro
  async destroy(req, res) {
    const { id } = req.params
    
    var livroDelete = await Livro.findById(id)
    
    try{
      fs.unlinkSync('./uploads/resizes/'+livroDelete.image)
    }catch(e){
      // return res.json('arquivo nao encontrado!');
      return res.json('./uploads/resizes/'+livroDelete.image);      
    }

    // return res.json(livroDelete);
    

    var livro = await Livro.findOneAndDelete(id)
    
    return res.json('livro removido!');
  },

  // Altera o livro
  async update(req, res) {
    const { filename: image} = req.file

    const data =  new Date();
    const dados = data.toString().split(' ');

    const [name, ext] = image.split('.')
    const complemento = (''+dados[1]+'-'+dados[2]+'-'+dados[3]+'-'+dados[4]).replace(":", "-").replace(":", "-");
    const fileName = `${name}`

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70})
      .toFile(
        path.resolve(req.file.destination, 
          'resizes', fileName+'.jpg')
      )
      
    var novoNome = path.resolve(req.file.destination,'resizes', fileName)+complemento+'.jpg'
    fs.renameSync(path.resolve(req.file.destination,'resizes', fileName+'.jpg'),novoNome)

    fs.unlinkSync(req.file.path)

    const { id } = req.params
    var livroFind = await Livro.findById(id)

    livroFind.author = req.body.author;
    livroFind.nomeLivro = req.body.nomeLivro;
    livroFind.numeroPaginas = req.body.numeroPaginas;
    livroFind.editora = req.body.editora;
    livroFind.isbn = req.body.isbn;
    
    try{
      fs.unlinkSync('./uploads/resizes/'+livroFind.image)
      livroFind.image = fileName+complemento+'.jpg';
    }catch(e){
      return res.json('arquivo anterior nao encontrado!');
    }

    try{
      req.io.emit('livro', livroFind);
      const livroRes = await livroFind.update(livroFind, { new: true })
      
      return res.json(livroRes);
    }catch(e){
      console.log(e);
      
      return res.json(e);
    }
  },

}

