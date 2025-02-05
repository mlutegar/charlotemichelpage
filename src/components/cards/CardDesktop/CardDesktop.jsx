import React from "react";
import { Card, Imagem, Info, Nome, Descricao, Quantidade } from "./Style";

const CardDesktop = ({ imgUrl, titulo, descricao, onClick }) => {
    return (
        <Card onClick={onClick}>
            <Imagem src={imgUrl} alt={titulo} />
            <Info>
                <Nome>{titulo}</Nome>
                <Descricao>{descricao}</Descricao>
                <Quantidade>Vende em 50 unidades</Quantidade>
            </Info>
        </Card>
    );
};

export default CardDesktop;
