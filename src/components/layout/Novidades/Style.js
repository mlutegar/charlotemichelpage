import styled from "styled-components"

export const NovidadesStyle = styled.div`
    height: 33.875rem;
    flex-shrink: 0;
    padding: 2rem 2rem 0;
    
    @media (max-width: 768px) {
        height: 100%;
    }
`;

export const ContainerStyle = styled.div`
    max-width: 1440px;
    margin: auto;
    
    @media(min-width: 768px) {
        .swiper {
            padding-top: 3.25rem;
            padding-right: 12.5rem;
            padding-left: 12.5em;
        }
    }
`;

export const TituloStyle = styled.div`
    color: var(--destaque);
    font-style: normal;
    padding-top: var(--margin-top);
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    
    @media (max-width: 768px) {
        margin-left: 0;
        padding: 1.44rem 1rem 0;
        text-align: center;
    }
`;

export const PratileiraStyle = styled.div`
    margin-top: 3.25rem;
    display: flex;
    gap: 1.62rem;
    overflow: hidden;
`;

export const DotsStyle = styled.div`
    .swiper-pagination {
        margin-top: 2.63rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #d9d9d9; /* Cinza */
        opacity: 1;
        transition: all 0.3s ease;
    }

    .swiper-pagination-bullet-active {
        width: 30px; /* Mais largo */
        height: 12px; /* Mesma altura */
        background-color: red; /* Vermelho */
        border-radius: 20px; /* Arredondado */
    }
    
    @media (max-width: 768px) {
        .swiper.swiper-initialized.swiper-horizontal{
            padding-top: 1.69rem;
        }
    }
`;