import styled from "styled-components";

export const MenuStyle = styled.div`
    .swiper-wrapper {
        padding: 1rem 0;
    }

    @media (min-width: 769px) {
        background-color: #fff;
        align-items: center;
        justify-content: flex-start;
        padding-top: 1.2em;
        padding-bottom: 1.2em;

        .swiper {
            padding-left: 0;
            margin-left: 0;
        }
    }

    @media (max-width: 768px) {
        position: sticky;
        top: 0;           /* Quando o elemento atingir 0px do topo, ele se fixa */
        z-index: 1000;    /* Garante que o menu fique acima dos outros elementos, como o banner */
        background: var(--background);

        .swiper {
            padding-left: 1.25rem;
        }
    }
`;

export const ConteudoStyle = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    background-color: #fff;
    align-items: center;
    justify-content: flex-start;
    padding: 1.2rem 2rem;

    @media screen and (min-width: 768px) {
        .swiper {
            padding-left: 0 !important;
        }
    }
    
    @media screen and (max-width: 768px) {
        padding: 1.2rem 0;
    }

`;

export const SearchBarStyle = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    max-width: 600px;
    justify-content: center;
    margin-top: 1rem;

    input {
        width: 100%;
        height: 3rem;
        border-radius: 0 1.25rem 1.25rem 0;
        background: #F3F3F3;
        border: none;
        color: #B0AEA7;
        padding-left: 1rem;
        font-size: 1rem;
        margin-left: 2rem;
    }

    input::placeholder {
        color: #B0AEA7;
    }

    input:focus {
        outline: none;
    }

    /* Esconde a search bar em telas menores que 768px */
    @media (max-width: 768px) {
        display: none;
    }

    @media (max-width: 480px) {
        input {
            max-width: 250px;
            height: 2.2rem;
            font-size: 0.8rem;
        }
    }
`;

export const BotaoPesquisarStyle = styled.button`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, stroke 0.3s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }

    &:active {
        transform: scale(0.9);
    }

    svg {
        transition: stroke 0.3s ease-in-out;
    }

    &:active svg {
        stroke: #FF6347;
    }
`;
