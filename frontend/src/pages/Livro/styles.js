import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;

    h2 {
        font-size: 50px;
        color: #eca400;
        font-family: Book Antiqua;
        font-weight: 400;
    }

    span {
        font-size: 20px;
    }

    .group-form {
        margin: 10px 0;
    }

    .group-form label,
    .double-1 label,
    .double-2 label {
        color: #eca400;
        font-size: 13px;
        margin-left: 30px;
    }

    .group-form input,
    .double-1 input,
    .double-2 input {
        border-radius: 50px;
        border: 1px solid #eca400;
        background: transparent;
        margin-top: 5px;
        font-size: 16px;
        padding: 15px 20px;
        height: unset;
        box-sizing: border-box;
        color: #fff;
    }

    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
    }

    .btn {
    border: 1px solid #eca400;
    color: #eca400;
    background-color: transparent;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: bold;
    height: 50px;
    }

    .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    }

    .mb{
        margin-bottom: 5px;
    }
`;
