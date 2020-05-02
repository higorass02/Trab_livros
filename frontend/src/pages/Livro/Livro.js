import React, { useState } from "react";
import { useHistory } from "react-router-dom"; //Puxando a React
import api from "../../services/api"; //Puxando a Api
import { Container } from "./styles"; //Puxando a Estilos

// Interface/Componente LivroCadastrar
export default function Livro() {

    // criação das propriedades e seus metodos seters
    const [author, setAutor] = useState("");
    const [nomeLivro, setNomeLivro] = useState("");
    const [editora, setEditora] = useState("");
    const [numeroPaginas, setPag] = useState("");
    const [isbn, setIsbn] = useState("");
    const [image, setImage] = useState();

    const history = useHistory();
    
    async function handleRegister(e) {
        // metodo para executar o Submit
        e.preventDefault();

        // objeto Livro para passar no post
        const inputs = {
                //'image':image,
                'author':author,
                'nomeLivro':nomeLivro,
                'numeroPaginas':numeroPaginas,
                'editora':editora,
                'isbn':isbn,
            };

        //criacao do formData para encapsular os dados para o envio via post
        const form_data = new FormData();

        //inserindo a imagem no formData
        form_data.append("image", image);

        //inserindo atributos do Livro(formulario)
        Object.entries(inputs).forEach(([key, value], index) => {
            form_data.append(key, value);
        });

        try {
            // Chamada da API
            await api.post("/livros", form_data)
            // .then(function (el) {
            //     alert('Livro Cadastrado com Sucesso!')
            //     // aqui deve entrar o redirecionamento para home
            // })
            // .catch(function (err) {
            //     console.log('falha no cadastro do livro!')
            //     console.log("Error: ", err);
            // });

            alert('Livro Cadastrado com Sucesso!');
            history.push("/");

        } catch (err) {
            alert("Erro no cadastro.");
        }
    }

    return (
        <Container className='container'>
            <h2>Book Collector</h2>
            <span>Insira as informações do livro</span>
            <form encType='multipart/form-data' onSubmit={handleRegister}>
                <div className='group-form'>
                    <label>Autor</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAutor(e.target.value)}
                    />
                </div>
                <div className='group-form'>
                    <label>Nome do livro</label>
                    <input
                        type='text'
                        value={nomeLivro}
                        onChange={(e) => setNomeLivro(e.target.value)}
                    />
                </div>
                <div className='group-form-double'>
                    <div className='double-1'>
                        <label>Editora</label>
                        <input
                            type='text'
                            value={editora}
                            onChange={(e) => setEditora(e.target.value)}
                        />
                    </div>
                    <div className='double-2'>
                        <label>Páginas</label>
                        <input
                            type='text'
                            value={numeroPaginas}
                            onChange={(e) => setPag(e.target.value)}
                        />
                    </div>
                </div>
                <div className='group-form'>
                    <label>ISBN do livro</label>
                    <input
                        type='text'
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                    />
                </div>
                <div className='group-form'>
                    <label>Livro</label>
                    <input
                        type='file'
                        name='image'
                        required
                        // value={image}
                        onChange={(e) => setImage(e.target.files[0])}                   
                    />
                </div>
                <button type='submit' className='button'>
                    Cadastrar livro
                </button>
            </form>
        </Container>
    );
}