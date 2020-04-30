import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import { Container, Header, Ul } from "./styles.js";

function ListaLivro() {
    return (
        <Container>
            <Header>
                <h2>Book Controller</h2>
                <span>Bem vindo(a), Vinny</span>
                <Link className='button' to='/cadastrolivro'>
                    Cadastrar livro
                </Link>
            </Header>

            <h1>Livros cadastrados</h1>

            <Ul>
                {/* {incidents.map((incident) => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>
                            {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(incident.value)}
                        </p>

                        <button
                            onClick={() => handleDeleteIncident(incident.id)} //Tem que usar o () => antes se não a função vai ser executada assim que o componente renderizar na tela
                            type='button'
                        >
                            <FiTrash2 size={20} color='#a8a8b3'></FiTrash2>
                        </button>
                    </li>
                ))} */}
                <li>
                    {/* <img src="" alt=""/> */}
                    <strong>Autor</strong>
                    <p>Vinny Bittencourt</p>

                    <strong>Nome do Livro</strong>
                    <p>Harry Porra e os crack filosofal</p>

                    <strong>Editora</strong>
                    <p>Panini</p>

                    <strong>Páginas</strong>
                    <p>450</p>
                    <button>
                        <FiTrash2 size={20} color='#a8a8b3'></FiTrash2>
                    </button>
                </li>

                <li>
                    {/* <img src="" alt=""/> */}
                    <strong>Autor</strong>
                    <p>Vinny Bittencourt</p>

                    <strong>Nome do Livro</strong>
                    <p>Harry Porra e os crack filosofal</p>

                    <strong>Editora</strong>
                    <p>Panini</p>

                    <strong>Páginas</strong>
                    <p>450</p>
                    <button>
                        <FiTrash2 size={20} color='#a8a8b3'></FiTrash2>
                    </button>
                </li>
            </Ul>
        </Container>
    );
}

export default ListaLivro;
