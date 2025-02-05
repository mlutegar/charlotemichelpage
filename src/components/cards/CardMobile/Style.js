import styled from "styled-components";

export const CardNovidadeStyle = styled.div`
    max-width: 20.875rem;
    border-radius: 0.75rem;
    background: #FFF;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    animation: fadeIn 0.6s ease-in-out forwards;

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
`;

export const ImagemStyle = styled.div`
    width: 100%;
    height: 11.9375rem;
    border-radius: 1.25rem 1.25rem 0 0;
    background: #D9D9D9;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    
`;

export const ConteudoStyle = styled.div`
    padding: 0.75rem 2.5rem;
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TituloStyle = styled.h2`
    font-family: Poppins, sans-serif;
    font-weight: 500;
    margin-top: 1.13rem;
    color: #131313;
    font-style: normal;
    text-align: left;
    font-size: 17px;
    line-height: 22px;
`;

export const DescricaoStyle = styled.p`
    font-family: Poppins, sans-serif;
    max-width: 19.375rem;
    max-height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: normal;
    text-align: left;
    font-weight: 500;
    line-height: 22px;
    width: 80%;
    font-size: 0.9rem;
    color: #555;
    margin-top: 0.5rem;
    transition: opacity 0.3s ease-in-out;
`;
