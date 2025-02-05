// Style.js
import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;

    @media (max-width: 768px) {
        align-items: flex-end;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ModalContainer = styled.div`
    background: white;
    width: 45rem;
    border-radius: 10px;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 90vh;
    overflow-y: auto;

    @media (max-width: 768px) {
        width: 100%;
        height: 90vh;
        border-radius: 0;
        animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(0);
        }
    }
`;


export const Header = styled.div`
    width: 100%;
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #FF3131;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #ddd;

    @media (max-width: 768px) {
        font-size: 1.25rem;
        padding: 0.75rem 0;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 768px) {
        left: 0.75rem;
        svg {
            width: 18px;
            height: 18px;
        }
    }
`;

export const Imagem = styled.img`
    width: 43.875rem;
    height: 21.9375rem;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 10px 10px 0 0;

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0;
        aspect-ratio: 16/9;
    }
`;

export const Conteudo = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 0.75rem;
        margin-top: 0.5rem;
    }
`;

export const Nome = styled.h3`
    width: auto;
    min-width: 4.4375rem;
    height: auto;
    color: #FF3131;
    text-align: center;
    font-family: Poppins;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    padding: 0.5rem 0;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const Descricao = styled.p`
    width: 100%;
    max-width: 31.4375rem;
    height: auto;
    color: #131313;
    text-align: center;
    margin: 0.5rem 0;
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;

    @media (max-width: 768px) {
        font-size: 0.875rem;
        padding: 0 1rem;
    }
`;

export const Quantidade = styled.span`
    width: auto;
    color: #FF3131;
    text-align: center;
    font-family: Poppins;
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0.5rem 0 1rem;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

export const Botao = styled.a`
    width: 14.84694rem;
    height: 2.16519rem;
    border-radius: 0.75rem;
    background: #FF3131;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    cursor: pointer;

    @media (max-width: 768px) {
        width: calc(100% - 2rem);
        max-width: 12rem;
        height: 2rem;
        font-size: 0.875rem;
        position: sticky;
        bottom: 1rem;
        margin-top: auto;
    }
`;