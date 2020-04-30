import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 20px auto;

    h1 {
        margin-top: 65px;
        margin-bottom: 24px;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    h2 {
        font-size: 50px;
        color: #eca400;
        font-family: Book Antiqua;
        font-weight: 400;
    }

    span {
        font-size: 20px;
        margin-left: 24px;
    }

    img {
        height: 64px;
    }

    a {
        width: 260px;
        margin-left: auto;
        margin-top: 0;
    }

    button {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;
    }

    button:hover {
        border-color: #999;
    }
`;

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    list-style: none;

    li {
        background: #3c5785;
        padding: 24px;
        border-radius: 8px;
        position: relative;
    }

    li button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: transparent;
    }

    li button:hover {
        opacity: 0.8;
    }

    li strong {
        display: block;
        margin-bottom: 16px;
        color: #eca400;
    }

    li p + strong {
        margin-top: 32px;
    }

    li p {
        color: #fff;
        line-height: 21px;
        font-size: 16px;
    }
`;
