import React from "react";
import {
    Overlay,
    ModalContainer,
    Header,
    CloseButton,
    Imagem,
    Conteudo,
    Nome,
    Descricao,
    Quantidade,
    Botao,
} from "./Style"; // Importando os estilos

const ModalSalgadinho = ({ isOpen, onClose, salgadinho }) => {
    if (!isOpen || !salgadinho) return null; // Não renderiza se o modal estiver fechado ou sem dados

    // Função para fechar o modal ao clicar no overlay (fundo escuro)
    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            onClose();
        }
    };

    return (
        <Overlay id="overlay" onClick={handleOverlayClick}>
            <ModalContainer onClick={(e) => e.stopPropagation()}> {/* Impede que o clique no modal feche ele */}
                <Header>
                    Cardápio
                    <CloseButton onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M7.875 11.375L10.5 14M10.5 14L13.125 11.375M10.5 14V7M18.375 10.5C18.375 14.8493 14.8493 18.375 10.5 18.375C6.15076 18.375 2.625 14.8493 2.625 10.5C2.625 6.15076 6.15076 2.625 10.5 2.625C14.8493 2.625 18.375 6.15076 18.375 10.5Z" stroke="#FF3131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </CloseButton>
                </Header>
                <Imagem src={salgadinho.urlfoto} alt={salgadinho.nome} />
                <Conteudo>
                    <Nome>{salgadinho.nome}</Nome>
                    <Descricao>{salgadinho.descricao}</Descricao>
                    <Quantidade>Vende em {salgadinho.quantidade_unidades} unidades</Quantidade>
                    <Botao href="https://drive.google.com/file/d/1caQSJ4nhu7Gz7VfEUTWsWTtMj7tP4Wcd/view" target="_blank" rel="noopener noreferrer">
                        Ver orçamento
                    </Botao>
                </Conteudo>
            </ModalContainer>
        </Overlay>
    );
};

export default ModalSalgadinho;
