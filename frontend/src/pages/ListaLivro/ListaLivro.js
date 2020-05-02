import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import { Container, Header, Ul } from "./styles.js";

function ListaLivro() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        api.get("/livros").then((response) => setBooks(response.data.docs));
    }, []);

    console.log(books);

    async function handleDeleteBook(id) {
        try {
            await api.delete(`livros/${id}`);

            setBooks(books.filter((book) => book._id !== id));
            /**
             * Usa o metodo de atualização do books pra filtrar e com isso só vai ter no array de books os bookes que não forem igual ao do id que foi deletado
             */
        } catch (err) {
            alert("Erro ao deletar o caso.");
        }
    }

    return (
        <Container>
            <Header>
                <h2>Book Controller</h2>
                <span>Bem vindo(a)</span>
                <Link className='button' to='/cadastrolivro'>
                    Cadastrar livro
                </Link>
            </Header>

            <h1>Livros cadastrados</h1>

            <Ul>
                {books.map((book) => (
                    <li key={book._id}>
                        <img src={`../../../../backend/src/uploads/resizes/${book.image}`} alt="Book" />
                        <strong>Autor</strong>
                        <p>{book.author}</p>

                        <strong>Nome do Livro</strong>
                        <p>{book.nomeLivro}</p>

                        <strong>Editora</strong>
                        <p>{book.editora}</p>

                        <strong>Páginas</strong>
                        <p>{book.numeroPaginas}</p>

                        <strong>Páginas</strong>
                        <p>{book.isbn}</p>
                        <button onClick={() => handleDeleteBook(book._id)}>
                            <FiTrash2  size={20} color='#a8a8b3'></FiTrash2>
                        </button>
                    </li>
                ))}
            </Ul>
        </Container>
    );
}

export default ListaLivro;
