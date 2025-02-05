import styled from "styled-components";
import { CardNovidadeStyle } from "../CardMobile/Style";

export const Card = styled.div`
    display: flex;
    width: 100%;
    max-height: 12.5rem;
    border-radius: 0.75rem;
    background: #FFF;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    flex-direction: row-reverse;

    &:hover {
        transform: translateY(-10px);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    };

    @media (max-width: 768px) {
        width: 20.875rem;
        flex-direction: column;
        flex-shrink: 0;
    }
`;

export const Imagem = styled.img`
    width: 30%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 768px) {
        width: 100%;
        height: 7.5835rem;
        border-radius: 1.25rem 1.25rem 0 0;
        background: #D9D9D9;
    }
`;

export const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    margin-left: 40px;
    transition: margin-left 0.3s ease-in-out;
    
    
    @media (max-width: 768px) {
        text-align: left;
        margin-left: 0;
        align-items: center;
        
        ${Card}:hover & {
            margin-left: 0;
        }
    }
`;

export const Nome = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 55px;
        color: #000;
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        font-weight: 400;
        text-align: center;


        @media (min-width: 768px) {
                color: #131313;
                font-style: normal;
                text-align: left;
                font-weight: 500;
                font-size: 17px;
                line-height: 22px;
        }
`;

export const Descricao = styled.div`
     width: 80%;   
    font-size: 0.9rem;
    color: #555;
    margin-top: 0.5rem;
    transition: opacity 0.3s ease-in-out;
    text-align: left;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Quantidade = styled.span`
    color: #B0AEA7;
    font-size: 1rem;
    text-align: center;
    margin-top: 0.5rem;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #7a7974;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;