import React from "react";

import { Container } from "./styles";

function Livro() {
    return (
        <Container className='container'>
            <h2>Book Collector</h2>
            <span>Insira as informações do livro</span>
            <form>
                <div className='group-form'>
                    <label>Autor</label>
                    <input type='text' />
                </div>
                <div className='group-form'>
                    <label>Nome do livro</label>
                    <input type='text' />
                </div>
                <div className='group-form-double'>
                    <div className='double-1'>
                        <label>Editora</label>
                        <input type='text' />
                    </div>
                    <div className='double-2'>
                        <label>Páginas</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='group-form'>
                    <label>Livro</label>
                    <input type='file' />
                </div>
                <button type='submit' className='button'>
                    Cadastrar livro
                </button>
            </form>
        </Container>
    );
}

export default Livro;
