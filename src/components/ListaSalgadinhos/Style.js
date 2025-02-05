import styled from "styled-components";

export const ListaSalgadinhosStyle = styled.div`
    padding: 2rem 2rem;
    
    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

export const Titulo = styled.h2`
    color: #F00;
    font-style: normal;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;

    @media (max-width: 768px) {
        text-align: center;
    }
    
`;

/* FLEXBOX RESPONSIVO */
export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;

    /* Desktop: 2 colunas */
    & > div {
        flex: 1 1 calc(50% - 1.5rem); /* 2 colunas (menos o gap) */
        max-width: 50%;
    }

    /* Tablet e celular: 1 coluna */
    @media (max-width: 768px) {
        & > div {
            flex: 1 1 calc(50% - 1.5rem);; /* Ocupa 100% da largura */
            max-width: 50%;
        }
    }
`;

