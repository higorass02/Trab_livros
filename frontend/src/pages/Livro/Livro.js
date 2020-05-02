import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"; //Link é uma outra forma de usar a tag 'a' porque a tag a faz com que a página faça o load inteiro na página
// import { FiLogIn } from "react-icons/fi"; //E a forma de importar o ícone do feather-icons como component dentro do projeto. obs.: Formato svg

import api from "../../services/api"; //Puxando a api

import { Container } from "./styles";

export default function Livro() {
    //criação das propriedades e seus metodos seters
    const [author, setAutor] = useState("");
    const [nomeLivro, setNomeLivro] = useState("");
    const [editora, setEditora] = useState("");
    const [numeroPaginas, setPag] = useState("");
    const [isbn, setIsbn] = useState("");
    const [image, setImage] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        //Prevent default para o submit não recarregar a page
        //const data para pegar o objeto com o objetivo de envialo para a api
        const data = {
            author,
            nomeLivro,
            numeroPaginas,
            editora,
            isbn,
            image,
        };

        try {
            console.log(data);
            const response = await api.post("livros", data);

            // alert(`Seu ID de acesso: ${response.data.id}`);
            // history.push("/"); //Envia o cliente de volta para a home
            // console.log(data)
        } catch (err) {
            alert("Erro no cadastro.");
        }
    }

    // }
    // function Livro() {
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
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <button type='submit' className='button'>
                    Cadastrar livro
                </button>
            </form>
        </Container>
    );
}

// export default Livro;
