import styled from "styled-components";

export const MenuButtomStyle = styled.div`
    width: 6.5rem;
    height: 6.5rem;
    flex-shrink: 0;
    border-radius: 0.75rem;
    background: ${({ active }) => (active ? "#FF3131" : "#FFF")};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
    animation: zoomIn 0.5s ease;
    /* Faz com que cada card se alinhe no início do container */
    scroll-snap-align: start;

    &:hover {
        transform: translateY(-5px);
    }

    @keyframes zoomIn {
        from {
            transform: scale(0.8);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

export const Icone = styled.div`
    /* Se preferir, pode usar um tamanho fixo em rem também, ou ajustar de forma relativa */
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Texto = styled.div`
    margin-top: 0.5rem;
    font-family: "Poppins", sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${({ active }) => (active ? "#FFF" : "#000")};
`;
