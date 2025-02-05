import styled from "styled-components"

export const SliderStyle = styled.div`
    position: relative;
    max-height: 27.25rem;
    
    img {
        max-height: 27.25rem;
    }

    .fundo, .fundo2 {
        position: absolute;
        top: 0;
        transition: transform 0.1s ease-out;
    }

    @media (max-width: 768px) {
        .fundo, .fundo2 {
            height: 100%;
            position: static;
        }

        .fundo {
            content: url("/imagens/banner/mobile/mobile3.png");
        }

        .fundo2 {
            content: url("/imagens/banner/mobile/mobile3.png");
        }
    }
`

export const BarraFundo = styled.div`
    background-color: #edeadf;
    height: 94px;
    width: 100%;
    position: absolute;
    z-index: 10;
    bottom: 0;
    padding: 0 100px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Limao = styled.div`
    position: absolute;
    z-index: 20;
    bottom: -34px;
    right: 750px;
    transition: transform 0.1s ease-out;

    img {
        height: 100%;
    }

    #pimenta2 {
        height: 300px;
    }


`

export const LimaoSegundo = styled.div`
    position: absolute;
    z-index: 20;
    top: 20px;
    //left: -150px;
    transition: transform 0.1s ease-out;

    #pimenta1 {
        height: 250px;
    }

    img {
        height: 90%;
    }

    #limao2 {
        height: 250px;
    }
`

export const Botao = styled.div`
    z-index: 2;
    bottom: 20px;
    left: -642px;
    transition: transform 0.1s ease-out;

    button {
        color: #EDEADF;
        text-align: center;
        font-family: Poppins;
        font-size: 1rem;
        font-style: normal;
        font-weight: 900;
        line-height: normal;

        width: 14.1875rem;
        height: 3.0625rem;

        border: none;
        border-radius: 0.625rem;
        background: #F00;

        cursor: pointer;
        transition: all 0.3s;
    }

    button:hover {
        background: #d55757;
        transform: scale(1.1);
    }

    img {
        height: 100%;
    }
`

export const ElementoFixo = styled.div`
    max-width: 1440px;
    width: 100%;
    position: relative;
    height: 660px;
    margin: 0 auto;
    z-index: 10;

    @media (max-width: 768px) {
        height: auto;
        display: none;
    }
`

export const ElementosFlutuantes = styled.div`
    max-width: 1440px;
    width: 100%;
    position: absolute;
    height: 660px;
    margin: 0 auto;
    z-index: 20;
    left: 50%;

    @media (max-width: 768px) {
        height: auto;
        display: none;
    }
`

export const Arte1Desktop = styled.div`

`

export const Arte2Desktop = styled.div`

`


